import getState from './state';
import getters from './getters';
import mutations from './mutations';

export default {
    namespaced: true,
    state: getState(),
    getters,
    mutations
};
