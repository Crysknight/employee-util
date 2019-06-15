import { socketManager } from 'plugins';
import router from 'router';
import { MESSAGE_WEBSOCKET_FAILURE } from 'constants';

export default store => {
    socketManager.addEventListener('message', ({ data }) => {
        let mutation;
        try {
            mutation = JSON.parse(data);
        } catch (error) {}

        if (!mutation) {
            return;
        }

        const mutations = Object.keys(store._mutations);
        if (!mutations.includes(mutation.type)) {
            return;
        }

        store.commit(mutation.type, mutation.payload);
    });

    socketManager.addEventListener('error', () => {
        store.dispatch(
            'interface/showMessage',
            { type: 'error', text: MESSAGE_WEBSOCKET_FAILURE, selfDestroy: 10000 }
        );
    });

    router.beforeEach((to, from, next) => {
        const { syncStore } = to.meta;
        if (syncStore) {
            //
        }

        next();
    });
};
