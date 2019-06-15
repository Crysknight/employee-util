import getSharedModules from 'shared/store';
import { socketManager } from 'plugins';
import { SHARED_STORE } from 'constants';

const actions = Object.keys(SHARED_STORE).reduce((actionsObject, moduleKey) => {
    const moduleActions = SHARED_STORE[moduleKey];
    if (!actionsObject[moduleKey]) {
        actionsObject[moduleKey] = {};
    }

    moduleActions.forEach(actionKey => {
        actionsObject[moduleKey][actionKey] = function(_context, payload) {
            const message = JSON.stringify({
                payload,
                type: `${moduleKey}/${actionKey}`
            });

            socketManager.send(message);
        };
    });

    return actionsObject;
}, {});

export default getSharedModules(actions);
