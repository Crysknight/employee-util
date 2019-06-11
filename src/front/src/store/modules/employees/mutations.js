import {
    MUTATION_SET_EMPLOYEES,
    MUTATION_ADD_SKILL_RATE,
    MUTATION_CHANGE_SKILL_RATE,
    MUTATION_INIT_EMPLOYEES_DELETION,
    MUTATION_ADD_EMPLOYEE,
    MUTATION_TOGGLE_EMPLOYEE_DELETION,
    MUTATION_DELETE_EMPLOYEES,
    MUTATION_CANCEL_EMPLOYEES_DELETION
} from 'constants';
import { arrayDelete, arrayToggle } from 'shared/utils';

export default {
    [MUTATION_SET_EMPLOYEES](state, employees) {
        state.employees = employees;
    },
    [MUTATION_ADD_SKILL_RATE](_state, { skill, rate }) {
        skill.rates.push(rate);
    },
    [MUTATION_CHANGE_SKILL_RATE](_state, { skill, rate }) {
        const targetRate = skill.rates.find(localRate => localRate.user === rate.user);
        targetRate.value = rate.value;
    },
    [MUTATION_ADD_EMPLOYEE](state, employee) {
        state.employees.push(employee);
    },
    [MUTATION_INIT_EMPLOYEES_DELETION](state) {
        state.isDeleteModeOn = true;
    },
    [MUTATION_TOGGLE_EMPLOYEE_DELETION](state, employee) {
        if (state.isDeleteModeOn) {
            arrayToggle(state.employeesToDelete, employee);
        }
    },
    [MUTATION_DELETE_EMPLOYEES](state) {
        state.employeesToDelete.forEach(employee => {
            arrayDelete(state.employees, employee);
        });

        state.employeesToDelete = [];
        state.isDeleteModeOn = false;
    },
    [MUTATION_CANCEL_EMPLOYEES_DELETION](state) {
        state.employeesToDelete = [];
        state.isDeleteModeOn = false;
    }
};
