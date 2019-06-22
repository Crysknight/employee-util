import { DISALLOWED_ACTIONS } from '$shared/constants';

export default (message, socket, userData, store) => {
    let action;
    try {
        action = JSON.parse(message);
    } catch (error) {
        socket.send('wrong message format, JSON required');
        return;
    }

    const payload = {};
    const { type, payload: rawPayload } = action;
    if (!type) {
        socket.send('wrong message format, should contain type');
    }

    payload.data = rawPayload;
    payload.userData = userData;

    const availableActions = Object.keys(store._actions);
    if (!availableActions.includes(type) || DISALLOWED_ACTIONS.includes(type)) {
        socket.send('wrong action type');
    } else {
        store.dispatch(type, payload);
    }
};