import VuexModuleFactory from '$shared/vuex_module_factory';

import { EmployeesGroup } from '$models';

VuexModuleFactory.createActionsServer('employeesGroups', EmployeesGroup);
