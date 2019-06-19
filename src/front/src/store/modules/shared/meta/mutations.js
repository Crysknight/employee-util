import {
    MUTATION_SUBSCRIBE_MODULE,
    MUTATION_UNSUBSCRIBE_MODULE
} from 'constants';

export default {
    [MUTATION_SUBSCRIBE_MODULE]: (state, { moduleName, targetModule, newState }) => {
        Object.keys(newState).forEach(key => {
            Vue.set(targetModule, key, newState[key]);
        });

        state.subscribedModules.add(moduleName);
    },
    [MUTATION_UNSUBSCRIBE_MODULE]: (state, { moduleName, targetModule }) => {
        const { eu_initial: initialState } = targetModule;
        if (initialState) {
            Object.keys(initialState).forEach(key => {
                Vue.set(targetModule, key, initialState[key]);
            });
        }

        state.subscribedModules.delete(moduleName);
    }
};
