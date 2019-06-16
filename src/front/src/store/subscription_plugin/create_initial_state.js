import { objectClone } from 'shared/utils';

export default store => {
    Object.keys(store.state).forEach(key => {
        const storeModule = store.state[key];
        Object.defineProperty(storeModule, 'eu_initial', {
            value: objectClone(storeModule),
            enumerable: false,
            configurable: false,
            writable: false
        });
    });
};
