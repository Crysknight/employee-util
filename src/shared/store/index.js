import * as modules from './modules';

export default actions => {
    Object.keys(actions).forEach(moduleName => {
        modules[moduleName].actions = actions[moduleName];
    });

    return modules;
};
