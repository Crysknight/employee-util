import { axios } from 'plugins';
import {
    MUTATION_SET_METRICS,
    MUTATION_CREATE_METRICS,
    MUTATION_DELETE_METRICS
} from 'constants';

export default {
    async getMetrics({ commit }) {
        const metrics = await axios.get('metrics');
        if (metrics) {
            commit(MUTATION_SET_METRICS, metrics);
        }
    },
    async createMetrics({ commit, dispatch }, name) {
        const metrics = await axios.post('metrics', { name });
        if (metrics) {
            await dispatch('employees/getEmployees', undefined, { root: true });
            commit(MUTATION_CREATE_METRICS, metrics);
        }
    },
    async deleteMetrics({ commit, dispatch }, metrics) {
        const response = await axios.delete('metrics', { data: { skillId: metrics._id } });
        if (response === 'ok') {
            await dispatch('employees/getEmployees', undefined, { root: true });
            commit(MUTATION_DELETE_METRICS, metrics);
        }
    }
};
