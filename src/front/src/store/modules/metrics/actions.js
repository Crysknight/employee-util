import { axios } from 'plugins';

export default {
    async createMetrics({ dispatch }, name) {
        const response = await axios.post('metrics', { name });
        if (response === 'ok') {
            await dispatch('employees/getEmployees', undefined, { root: true });
        }
    }
};
