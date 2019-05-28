import { axios } from 'plugins';

import {
    MUTATION_SET_EMPLOYEES,
    MUTATION_ADD_SKILL_RATE,
    MUTATION_CHANGE_SKILL_RATE
} from 'constants';

export default {
    async getEmployees({ commit }) {
        const employees = await axios.get('employee');
        if (!employees) {
            return;
        }

        commit(MUTATION_SET_EMPLOYEES, employees);
    },
    async rateSkill({ commit }, { employee, skill, value }) {
        const employeeId = employee._id;
        const skillId = skill._id;

        const response = await axios.post('rate', { employeeId, skillId, value });
        if (response) {
            const { isNew, rate } = response;
            if (isNew) {
                commit(MUTATION_ADD_SKILL_RATE, { skill, rate });
            } else {
                commit(MUTATION_CHANGE_SKILL_RATE, { skill, rate });
            }
        }
    }
};
