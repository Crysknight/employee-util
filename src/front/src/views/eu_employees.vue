<template>
    <div class="eu-employees">
        <EUEmployee
            v-for="employee of employees"
            :key="employee._id"
            :employee="employee"
        />
        <div class="eu-employees__buttons">
            <EUButton
                v-if="isDeleteModeOn"
                round
                warning
                icon="clear.svg"
                @click="MUTATION_CANCEL_EMPLOYEES_DELETION"
            />
            <EUButton
                v-if="isDeleteModeOn"
                round
                danger
                icon="delete.svg"
                :disabled="isNoEmployeesToDelete"
                @click="deleteEmployees"
            />
            <EUButton
                v-context-menu="{
                    leftClick: true,
                    position: 'top left',
                    options: [
                        {
                            text: 'Добавить работника',
                            function: addEmployee
                        },
                        {
                            text: 'Удалить работников',
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
            />
        </div>
    </div>
</template>

<script>
import { EUEmployee } from 'components';
import {
    MODAL_TYPES,
    MUTATION_INIT_EMPLOYEES_DELETION,
    MUTATION_CANCEL_EMPLOYEES_DELETION
} from 'constants';

export default {
    name: 'EUEmployees',
    components: { EUEmployee },
    computed: {
        ...mapState('employees', [
            'employees',
            'isDeleteModeOn'
        ]),
        ...mapGetters('employees', ['isNoEmployeesToDelete'])
    },
    methods: {
        addEmployee() {
            this.showModal(MODAL_TYPES.ADD_EMPLOYEE);
        },
        initEmployeeDeletion() {
            this.MUTATION_INIT_EMPLOYEES_DELETION();
        },
        addMetrics() {
            this.showModal(MODAL_TYPES.ADD_METRICS);
        },
        deleteMetrics() {
            this.showModal(MODAL_TYPES.DELETE_METRICS);
        },
        ...mapActions('employees', [
            'getEmployees',
            'initEmployeesDeletion',
            'cancelEmployeesDeletion',
            'deleteEmployees'
        ]),
        ...mapActions('interface', ['showModal']),
        ...mapMutations('employees', [
            MUTATION_INIT_EMPLOYEES_DELETION,
            MUTATION_CANCEL_EMPLOYEES_DELETION
        ])
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

        &__buttons {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: fixed;
            right: 25px;
            bottom: 25px;
            margin: 0 -5px;

            & > * {
                margin: 0 5px;
            }
        }
    }
</style>
