import VuexModuleFactory from './factory';

import employees from './employees';
import employeeGroups from './employee_groups';
import measures from './measures';
import measureGroups from './measure_groups';
import rates from './rates';
import meta from './meta';

const vuexModules = [
    ['employees', employees],
    ['employeeGroups', employeeGroups],
    'employeeStatuses',
    ['measures', measures],
    ['measureGroups', measureGroups],
    ['rates', rates]
];

VuexModuleFactory.create(vuexModules);
VuexModuleFactory.register('meta', meta);

export default VuexModuleFactory;
