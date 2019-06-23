import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';
import websocketPlugin from './websocket_plugin';

Vue.use(Vuex);

export default socketServer => {
    const store = new Vuex.Store({
        modules,
        plugins: [websocketPlugin(socketServer)]
    });

    global.$store = store;

    store.dispatch('meta/initialize');
}
