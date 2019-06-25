import VuexModuleFactory from './factory';

import employees from './employees';
import rates from './rates';
import meta from './meta';

const vuexModules = [
    ['employees', employees],
    'employeeGroups',
    'employeeStatuses',
    'measures',
    'measureGroups',
    ['rates', rates]
];

VuexModuleFactory.create(vuexModules);
VuexModuleFactory.register('meta', meta);

export default VuexModuleFactory;
