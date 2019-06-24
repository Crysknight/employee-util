import VuexModuleFactory from 'shared/vuex_module_factory';
import { socketManager } from 'plugins';

import employees from './employees';
import meta from './meta';
import app from './app';
import appInterface from './app_interface';

const extenderModules = [
    ['employees', employees],
    ['meta', meta]
];

VuexModuleFactory.extend(extenderModules);

VuexModuleFactory.register('app', app);
VuexModuleFactory.register('appInterface', appInterface);

const extenderActions = {
    meta: ['subscribe']
};
VuexModuleFactory.createActionsFront(socketManager, extenderActions);

export default VuexModuleFactory.modules;
