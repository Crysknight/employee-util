import {
    MUTATION_TOGGLE_MENU,
    MUTATION_OPEN_CONTEXT_MENU,
    MUTATION_CLOSE_CONTEXT_MENU,
    MUTATION_SHOW_MESSAGE,
    MUTATION_HIDE_MESSAGE,
    MUTATION_SHOW_MODAL,
    MUTATION_HIDE_MODAL
} from 'constants';

export default {
    [MUTATION_TOGGLE_MENU](state) {
        state.menu = !state.menu;
    },
    [MUTATION_OPEN_CONTEXT_MENU](state, menu) {
        state.contextMenu = menu;
    },
    [MUTATION_CLOSE_CONTEXT_MENU](state) {
        state.contextMenu = null;
    },
    [MUTATION_SHOW_MESSAGE](state, message) {
        state.messages.push(message);
    },
    [MUTATION_HIDE_MESSAGE](state, message) {
        const index = state.messages.indexOf(message);
        state.messages.splice(index, 1);
    },
    [MUTATION_SHOW_MODAL](state, modal) {
        state.modals.push(modal);
    },
    [MUTATION_HIDE_MODAL](state, modal) {
        const index = state.modals.indexOf(modal);
        state.modals.splice(index, 1);
    }
};
