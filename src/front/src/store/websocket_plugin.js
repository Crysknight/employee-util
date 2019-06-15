import { socket } from 'plugins';
import router from 'router';

export default store => {
    socket.addEventListener('message', ({ data }) => {
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

    router.beforeEach((to, from, next) => {
        const { syncStore } = to.meta;
        if (syncStore) {
            //
        }

        next();
    });
};
