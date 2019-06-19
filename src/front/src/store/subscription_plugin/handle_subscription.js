import { socketManager } from 'plugins';

import {
    MUTATION_SUBSCRIBE_MODULE,
    SUBSCRIPTION_ERROR_NO_TARGET_MODULE
} from 'constants';
import { SUBSCRIPTION_MESSAGE_TYPE } from 'shared/constants';

export default store => {
    const applySubscription = modules => {
        Object.keys(modules).forEach(moduleName => {
            const targetModule = store.state[moduleName];
            if (!targetModule) {
                throw new Error(SUBSCRIPTION_ERROR_NO_TARGET_MODULE);
            }
            const newState = modules[moduleName];
            store.commit(
                `meta/${MUTATION_SUBSCRIBE_MODULE}`,
                { moduleName, targetModule, newState }
            );
        });
    };

    socketManager.addEventListener('message', message => {
        if (message.type === SUBSCRIPTION_MESSAGE_TYPE) {
            applySubscription(message.modules);
        }
    });
};
