import VuexModuleFactory from '$shared/vuex_module_factory';

import { Measure } from '$models';

VuexModuleFactory.createActionsServer('measures', Measure);
