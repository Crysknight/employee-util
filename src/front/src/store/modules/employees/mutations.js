import {
    MUTATION_SET_EMPLOYEES,
    MUTATION_ADD_SKILL_RATE,
    MUTATION_CHANGE_SKILL_RATE,
    MUTATION_ADD_EMPLOYEE
} from 'constants';

export default {
    [MUTATION_SET_EMPLOYEES](state, employees) {
        state.splice(0, state.length);
        state.push(...employees);
    },
    [MUTATION_ADD_SKILL_RATE](_state, { skill, rate }) {
        skill.rates.push(rate);
    },
    [MUTATION_CHANGE_SKILL_RATE](_state, { skill, rate }) {
        const targetRate = skill.rates.find(localRate => localRate.user === rate.user);
        targetRate.value = rate.value;
    },
    [MUTATION_ADD_EMPLOYEE](state, employee) {
        state.push(employee);
    }
};
