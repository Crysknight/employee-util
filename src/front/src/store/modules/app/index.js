import { getUser } from 'utils';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        user: getUser()
    },
    getters,
    mutations,
    actions
};
