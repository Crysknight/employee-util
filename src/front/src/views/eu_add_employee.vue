<template>
    <div class="eu-add-employee">
        <form
            ref="addEmployeeForm"
            class="eu-add-employee__form"
            @submit.prevent="createEmployee({ name, isMentor, avatar })"
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
            <EUButton noShadow type="submit">Создать</EUButton>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EUAddEmployee',
    data() {
        return {
            name: '',
            isMentor: false,
            avatar: null
        };
    },
    methods: {
        ...mapActions('employees', ['createEmployee'])
    }
};
</script>

<style lang="scss">
    .eu-add-employee {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        &__form {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 500px;
            padding: 15px;
            border-radius: 2px;
            background-color: white;
            box-shadow: 0 0 5px rgba(50, 50, 50, 0.3);
        }
    }
</style>
