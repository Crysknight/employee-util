import {
    MUTATION_SHOW_MESSAGE,
    MUTATION_HIDE_MESSAGE,
    MUTATION_SHOW_MODAL,
    MUTATION_HIDE_MODAL
} from 'constants';
import { stringRandom } from 'utils';

export default {
    showMessage({ commit }, payload) {
        const message = {
            id: stringRandom(),
            selfDestroy: 3000
        };
        if (typeof payload === 'string') {
            message.text = payload;
        } else {
            Object.keys(payload).forEach(key => {
                message[key] = payload[key];
            });
        }

        commit(MUTATION_SHOW_MESSAGE, message);

        if (message.selfDestroy) {
            setTimeout(() => {
                commit(MUTATION_HIDE_MESSAGE, message);
            }, message.selfDestroy);
        }
    },
    showModal({ commit }, payload) {
        const modal = {
            id: stringRandom(),
            hideOnOverlayClick: true
        };

        if (typeof payload === 'string') {
            modal.type = payload;
        } else {
            Object.keys(payload).forEach(key => {
                modal[key] = payload[key];
            });
        }

        commit(MUTATION_SHOW_MODAL, modal);
    },
    hideModal(
        { commit, getters: { currentModal, modalById } },
        payload = currentModal
    ) {
        const modal = typeof payload === 'string'
            ? modalById(payload)
            : payload;

        commit(MUTATION_HIDE_MODAL, modal);
    }
};
