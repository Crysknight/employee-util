import VuexModuleFactory from '$shared/vuex_module_factory';

import { Employee } from '$models';

VuexModuleFactory.createActionsServer('employees', Employee);
