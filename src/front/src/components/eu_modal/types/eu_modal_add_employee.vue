<template>
    <div class="eu-modal-add-employee">
        <form
            ref="addEmployeeForm"
            class="eu-modal-add-employee__form"
            @submit.prevent="add"
        >
            <EUInput
                placeholder="Имя"
                required
                v-model="name"
            />
            <EUCheckbox
                label="Является ментором"
                v-model="isMentor"
            />
            <EUFileInput
                label="Аватар"
                v-model="avatar"
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
    name: 'EUModalAddEmployee',
    data() {
        return {
            name: '',
            isMentor: false,
            avatar: null
        };
    },
    methods: {
        add() {
            const { name, isMentor, avatar } = this;
            this.createEmployee({ name, isMentor, avatar });

            this.hideModal();
        },
        ...mapActions('employees', ['createEmployee']),
        ...mapActions('interface', ['hideModal'])
    }
};
</script>

<style lang="scss">
    .eu-modal-add-employee {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        &__form {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 15px;
            border-radius: 2px;
        }

        &__submit-button {
            margin: 25px auto 0;
        }
    }
</style>
