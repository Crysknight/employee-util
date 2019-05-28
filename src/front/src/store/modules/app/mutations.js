import {
    MUTATION_SET_USER,
    MUTATION_UNSET_USER
} from 'constants';

export default {
    [MUTATION_SET_USER](state, user) {
        state.user = user;
    },
    [MUTATION_UNSET_USER](state) {
        state.user = null;
    }
};
