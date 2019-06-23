import VuexModuleFactory from '$shared/vuex_module_factory';

import './employees';
import './employees_groups';
import './employees_statuses';
import './measures';
import './measures_groups';
import './rates';

import meta from './meta';

VuexModuleFactory.extend('meta', meta);

export default VuexModuleFactory.modules;
