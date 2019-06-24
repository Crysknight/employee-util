import VuexModuleFactory from '$shared/vuex_module_factory';

import { EmployeesStatus } from '$models';

VuexModuleFactory.createActionsServer('employeesStatuses', EmployeesStatus);
