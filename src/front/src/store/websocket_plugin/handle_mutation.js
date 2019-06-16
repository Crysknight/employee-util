export default (mutation, store) => {
    const { type, payload } = mutation;
    const [moduleName] = type.split('/');

    const mutations = Object.keys(store._mutations);
    const hasMutation = mutations.includes(type);
    const isSubscribed = store.getters['meta/isSubscribed'](moduleName);
    if (!hasMutation || !isSubscribed) {
        return;
    }

    store.commit(type, payload);
};
