import getSharedModules from 'shared/store';
import { SHARED_ACTIONS } from 'constants';

const actions = SHARED_ACTIONS.reduce((actionsObject, action) => {
    const [moduleName, actionName] = action.split('/');
    if (!actionsObject[moduleName]) {
        actionsObject[moduleName] = {};
    }

    actionsObject[moduleName][actionName] = function({ rootState }, payload) {
        const { socket } = rootState;
        if (socket && socket.socket) {
            const message = JSON.stringify({
                payload,
                type: action
            });

            socket.socket.send(message);
        }
    };

    return actionsObject;
}, {});

export default getSharedModules(actions);
