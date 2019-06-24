import VuexModuleFactory from 'shared/vuex_module_factory';

import state from './state';
import getters from './getters';
import mutations from './mutations';

VuexModuleFactory.createActionsFront('employees');

export default {
    namespaced: true,
    state,
    getters,
    mutations
};
