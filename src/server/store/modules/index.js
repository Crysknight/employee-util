import VuexModuleFactory from '$shared/vuex_module_factory';

import {
    Employee,
    EmployeeGroup,
    EmployeeStatus,
    Measure,
    MeasureGroup,
    Rate
} from '$models';

import meta from './meta';

const createActionsOptions = [
    ['employees', Employee],
    ['employeeGroups', EmployeeGroup],
    ['employeeStatuses', EmployeeStatus],
    ['measures', Measure],
    ['measureGroups', MeasureGroup],
    ['rates', Rate]
];

VuexModuleFactory.createActionsServer(createActionsOptions);

VuexModuleFactory.extend('meta', meta);

export default VuexModuleFactory.modules;
