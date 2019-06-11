import Vuex from 'vuex';

import * as modules from './modules';
import sharedModules from './shared_modules';
import websocketPlugin from './websocket_plugin';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: { ...modules, ...sharedModules },
    plugins: [websocketPlugin]
});

window.$store = store;

export default store;
