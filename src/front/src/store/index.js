import Vuex from 'vuex';

import * as modules from './modules';
import websocketPlugin from './websocket_plugin';
import subscriptionPlugin from './subscription_plugin';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules,
    plugins: [websocketPlugin, subscriptionPlugin],
    strict: IS_DEVELOPMENT
});

window.$store = store;

export default store;
