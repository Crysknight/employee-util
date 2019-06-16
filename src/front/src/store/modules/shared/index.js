import getSharedModules from 'shared/store';
import { socketManager } from 'plugins';
import { SHARED_STORE } from 'constants';

import localMeta from './meta';
import localEmployees from './employees';

const localModules = {
    meta: localMeta,
    employees: localEmployees
};

Object.keys(localModules).forEach(moduleName => {
    const localModule = localModules[moduleName];
    const actionsNames = SHARED_STORE[moduleName];

    if (!localModule.actions) {
        localModule.actions = {};
    }
    if (!localModule.mutations) {
        localModule.mutations = {};
    }

    actionsNames.forEach(actionName => {
        localModule.actions[actionName] = function(_context, payload) {
            const message = JSON.stringify({
                payload,
                type: `${moduleName}/${actionName}`
            });

            socketManager.send(message);
        };
    });
});

const { employees, meta } = getSharedModules(localModules, true);

export { employees, meta };
