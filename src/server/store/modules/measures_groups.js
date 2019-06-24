import VuexModuleFactory from '$shared/vuex_module_factory';

import { MeasuresGroup } from '$models';

VuexModuleFactory.createActionsServer('measuresGroups', MeasuresGroup);
