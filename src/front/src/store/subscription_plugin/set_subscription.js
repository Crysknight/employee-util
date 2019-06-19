import router from 'router';
import { MUTATION_UNSUBSCRIBE_MODULE } from 'constants';

export default store => {
    router.beforeEach(async (to, from, next) => {
        const { syncStore } = to.meta;
        if (syncStore) {
            store.dispatch('meta/subscribe', syncStore);
        }

        if (from) {
            const { syncStore: syncStoreFrom } = from.meta;
            if (syncStoreFrom) {
                const unsubModulesNames = syncStore
                    ? syncStoreFrom.filter(
                        moduleName => !syncStore.includes(moduleName)
                    )
                    : syncStoreFrom;
                unsubModulesNames.forEach(moduleName => {
                    const targetModule = store.state[moduleName];

                    store.commit(
                        `meta/${MUTATION_UNSUBSCRIBE_MODULE}`,
                        { moduleName, targetModule }
                    );
                });
            }
        }

        next();
    });
};
