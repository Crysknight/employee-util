import vueConstants from 'vue-constants';

import EUApp from './eu_app';
import { router, registerGlobals } from './plugins';
import store from './store';

Vue.use(vueConstants);
Vue.config.productionTip = false;

registerGlobals();

new Vue({
    store,
    router,
    render: h => h(EUApp)
}).$mount('#app');
