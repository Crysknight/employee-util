import { DISALLOWED_ACTIONS } from '../constants';
import * as modules from './modules';

export default (localModules, filterDisallowed = false) => {
    Object.keys(modules).forEach(moduleName => {
        if (localModules[moduleName]) {
            const localModule = localModules[moduleName];
            const sharedModule = modules[moduleName];

            if (localModule.state) {
                sharedModule.state = {
                    ...localModule.state,
                    ...sharedModule.state
                };
            }

            if (localModule.getters) {
                sharedModule.getters = {
                    ...localModule.getters,
                    ...sharedModule.getters
                };
            }

            if (localModule.mutations) {
                sharedModule.mutations = {
                    ...localModule.mutations,
                    ...sharedModule.mutations
                };
            }

            if (localModule.actions) {
                sharedModule.actions = localModule.actions;
            }
        }
    });

    if (filterDisallowed) {
        DISALLOWED_ACTIONS.forEach(action => {
            const [moduleName, actionName] = action.split('/');
            const sharedModule = modules[moduleName];
            if (sharedModule && sharedModule.actions) {
                delete sharedModule.actions[actionName];
            }
        });
    }

    return modules;
};
