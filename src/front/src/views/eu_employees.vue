<template>
    <div class="eu-employees">
        <EUEmployee
            v-for="employee of employees"
            :key="employee._id"
            :employee="employee"
        />
        <EUButton
            v-contextmenu="{
                leftClick: true,
                position: 'top left',
                options: [
                    {
                        text: 'Добавить работника',
                        function: addEmployee
                    },
                    {
                        text: 'Удалить работника',
                        function: initEmployeeDeletion
                    },
                    {
                        text: 'Добавить метрику',
                        function: addMetrics
                    },
                    {
                        text: 'Удалить метрику',
                        function: deleteMetrics
                    }
                ]
            }"
            icon="options.svg"
            round
            white
            class="eu-employees__options-button"
        />
    </div>
</template>

<script>
import { EUEmployee } from 'components';
import router from 'router';

export default {
    name: 'EUEmployees',
    components: { EUEmployee },
    computed: {
        ...mapState(['employees'])
    },
    created() {
        this.getEmployees();
    },
    methods: {
        addEmployee() {
            router.push({ name: 'addEmployee' });
        },
        initEmployeeDeletion() {
            console.log('initEmployeeDeletion');
        },
        addMetrics() {
            console.log('addMetrics');
        },
        deleteMetrics() {
            console.log('deleteMetrics');
        },
        ...mapActions('employees', ['getEmployees'])
    }
};
</script>

<style lang="scss">
    .eu-employees {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin: 0 -10px;

        &__options-button {
            position: fixed;
            right: 25px;
            bottom: 25px;
        }
    }
</style>
