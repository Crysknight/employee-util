import * as globals from 'components/global';
import { contextMenu } from '../directives';

export default () => {
    Object.keys(globals).forEach(key => {
        Vue.component(key, globals[key]);
    });
    Vue.directive('contextmenu', contextMenu);
};
