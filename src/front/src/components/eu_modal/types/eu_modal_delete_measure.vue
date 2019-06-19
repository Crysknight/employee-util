<template>
    <div class="eu-modal-delete-measure">
        <form
            ref="deleteMeasureForm"
            class="eu-modal-delete-measure__form"
            @submit.prevent=""
        >
            <EUSelect
                v-model="measure"
            />
            <EUInput
                v-focus-first
                placeholder="Название"
                required
                v-model="name"
            />
            <EUButton
                class="eu-modal-delete-measure__submit-button"
                noShadow
                type="submit"
            >Создать</EUButton>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EUModalDeleteMeasure',
    data() {
        return { measure: null };
    },
    methods: {
        // async add() {
        //     this.createMeasure(this.name);

        //     this.hideModal();
        // },
        // ...mapActions('interface', ['hideModal'])
    }
};
</script>
