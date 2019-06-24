import VuexModuleFactory from '$shared/vuex_module_factory';

import { Rate } from '$models';

VuexModuleFactory.createActionsServer('rates', Rate);
