import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getModules from 'shared/store';
import websocketPlugin from './websocket_plugin';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: getModules(actions),
    plugins: [websocketPlugin]
});

global.$store = store;
