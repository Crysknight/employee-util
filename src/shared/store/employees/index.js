import getState from './state';
import mutations from './mutations';

export default {
    namespaced: true,
    state: getState(),
    mutations
};
