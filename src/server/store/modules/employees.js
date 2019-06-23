import VuexModuleFactory from '$shared/vuex_module_factory';

import { Employee } from '$models';

VuexModuleFactory.createActions('employees', Employee);
