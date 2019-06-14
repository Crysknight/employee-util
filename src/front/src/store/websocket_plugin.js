import { socket } from 'plugins';

export default store => {
    socket.addEventListener('message', ({ data }) => {
        console.log(data);
        let mutation;
        try {
            mutation = JSON.parse(data);
        } catch (error) {}

        if (!mutation) {
            return;
        }

        console.log(mutation);

        const mutations = Object.keys(store._mutations);
        if (!mutations.includes(mutation.type)) {
            return;
        }

        store.commit(mutation.type, mutation.payload);
    });
};
