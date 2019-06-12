import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getModules from 'shared/store';
import websocketPlugin from './websocket_plugin';
import initialize from './initialize';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: getModules(actions),
    plugins: [websocketPlugin],
    actions: { initialize }
});

global.$store = store;

store.dispatch('initialize');
