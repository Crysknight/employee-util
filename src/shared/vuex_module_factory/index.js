import VuexModuleFactory from './factory';

import employees from './employees';
import meta from './meta';

const vuexModules = [
    ['employees', employees],
    'employeesGroups',
    'employeesStatuses',
    'measures',
    'measuresGroups',
    'rates'
];

VuexModuleFactory.create(vuexModules);
VuexModuleFactory.register('meta', meta);

export default VuexModuleFactory;
