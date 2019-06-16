export default {
    isSubscribed: state => moduleName => {
        return state.subscribedModules.has(moduleName);
    }
};
