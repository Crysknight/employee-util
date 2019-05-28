import { sync } from 'vuex-router-sync';
import Vuex from 'vuex';

import * as modules from './modules';
import { router } from '../plugins';

Vue.use(Vuex);

const store = new Vuex.Store({ modules });
sync(store, router);

window.$store = store;

export default store;
