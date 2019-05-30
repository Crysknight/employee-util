export default {
    currentMessage(state) {
        return state.messages[0];
    },
    currentModal(state) {
        return state.modals[0];
    },
    modalById(state) {
        return id => state.modals.find(modal => modal.id === id);
    }
};
