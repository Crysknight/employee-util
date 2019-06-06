<template>
    <div class="eu-modal-add-metrics">
        <form
            ref="addMetricsForm"
            class="eu-modal-add-employee__form"
            @submit.prevent="add"
        >
            <EUSelect
                v-model="metrics"
            />
            <EUInput
                v-focus-first
                placeholder="Название"
                required
                v-model="name"
            />
            <EUButton
                class="eu-modal-add-employee__submit-button"
                noShadow
                type="submit"
            >Создать</EUButton>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EUModalAddMetrics',
    data() {
        return { metrics: null };
    },
    created() {
        this.getMetrics();
    },
    methods: {
        async add() {
            await this.createMetrics(this.name);

            this.hideModal();
        },
        ...mapActions('metrics', ['getMetrics']),
        ...mapActions('interface', ['hideModal'])
    }
};
</script>
