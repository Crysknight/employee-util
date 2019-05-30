import * as globals from 'components/global';
import { contextMenu, focusFirst } from '../directives';

export default () => {
    Object.keys(globals).forEach(key => {
        Vue.component(key, globals[key]);
    });

    Vue.directive('context-menu', contextMenu);
    Vue.directive('focus-first', focusFirst);
};
