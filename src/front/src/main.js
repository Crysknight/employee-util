import vueConstants from 'vue-constants';
import { sync } from 'vuex-router-sync';

import EUApp from './eu_app';
import { registerGlobals } from './plugins';
import router from './router';
import store from './store';

Vue.use(vueConstants);
Vue.config.productionTip = false;

sync(store, router);

registerGlobals();

new Vue({
    store,
    router,
    render: h => h(EUApp)
}).$mount('#app');
