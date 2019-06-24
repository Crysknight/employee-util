<template>
    <div class="eu-modal-add-measure">
        <form
            class="eu-modal-add-measure__form"
            @submit.prevent="add"
        >
            <EUInput
                v-focus-first
                placeholder="Название"
                required
                v-model="name"
            />
            <EUButton
                class="eu-modal-add-measure__submit-button"
                noShadow
                type="submit"
            >Создать</EUButton>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EUModalAddMeasure',
    data() {
        return { name: '' };
    },
    methods: {
        async add() {
            await this.createMeasure(this.name);

            this.hideModal();
        },
        ...mapActions('measures', ['createMeasure']),
        ...mapActions('appInterface', ['hideModal'])
    }
};
</script>
