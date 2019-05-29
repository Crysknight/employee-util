import Vuex from 'vuex';

import * as modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({ modules });

window.$store = store;

export default store;
