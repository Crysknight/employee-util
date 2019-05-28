import {
    MUTATION_SHOW_MESSAGE,
    MUTATION_HIDE_MESSAGE
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
    }
};
