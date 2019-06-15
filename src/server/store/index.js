import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getModules from '$shared/store';
import websocketPlugin from './websocket_plugin';

Vue.use(Vuex);

export default socketServer => {
    const store = new Vuex.Store({
        modules: getModules(actions),
        plugins: [websocketPlugin(socketServer)]
    });

    global.$store = store;

    store.dispatch('meta/initialize');
}
