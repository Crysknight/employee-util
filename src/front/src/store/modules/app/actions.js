import { axios } from 'plugins';
import router from 'router';
import { getUser } from 'utils';
import {
    MUTATION_SET_USER,
    MUTATION_UNSET_USER,
    MESSAGE_WRONG_CREDENTIALS
} from 'constants';

export default {
    checkAuth({ state }) {
        if (!state.user) {
            router.push({ name: 'auth' });
        }
    },
    async authorize({ commit, dispatch }, { login, password }) {
        const response = await axios.post('login', { login, pwd: password });
        if (response === 'ok') {
            router.push({ name: 'home' });

            const user = getUser();
            commit(MUTATION_SET_USER, user);
        } else {
            dispatch(
                'interface/showMessage',
                { type: 'error', text: MESSAGE_WRONG_CREDENTIALS },
                { root: true }
            );
        }
    },
    async logOut({ commit }) {
        const response = await axios.get('logout');
        if (response === 'ok') {
            commit(MUTATION_UNSET_USER);
            router.push({ name: 'auth' });
        }
    }
};
