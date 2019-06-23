import {
    isArray,
    isObject,
    stringSingular,
    stringToConstant,
    stringCapitalize,
    arrayDeleteById,
    arrayUpdateById
} from '../utils';
import {
    MUTATION_CREATE,
    MUTATION_SET,
    MUTATION_UPDATE,
    MUTATION_DELETE
} from '../constants';

export default class VuexModuleFactory {
    static modulesWrappers = {};
    static processedWrapper = null;

    static get modules() {
        return Object.keys(this.modulesWrappers).reduce((modules, key) => {
            modules[key] = this.modulesWrappers[key].vuexModule;

            return modules;
        }, {});
    }

    static get MUTATIONS() {
        return Object.keys(this.modulesWrappers).reduce((mutations, key) => {
            const moduleWrapper = this.modulesWrappers[key];
            const {
                selfRegistered,
                MUTATION_CREATE,
                MUTATION_SET,
                MUTATION_UPDATE,
                MUTATION_DELETE
            } = moduleWrapper;

            if (!selfRegistered) {
                mutations[MUTATION_CREATE] = MUTATION_CREATE;
                mutations[MUTATION_SET] = MUTATION_SET;
                mutations[MUTATION_UPDATE] = MUTATION_UPDATE;
                mutations[MUTATION_DELETE] = MUTATION_DELETE;
            }

            return mutations;
        }, {});
    }

    static create(payload, extenderModule) {
        if (isArray(payload)) {
            this.createMany(payload);
        } else if (typeof payload === 'string') {
            this.createOne(payload, extenderModule);
        }
    }

    static createMany(vuexModules) {
        vuexModules.forEach(vuexModule => {
            if (typeof vuexModule === 'string') {
                this.createOne(vuexModule);
            } else if (vuexModule.name && vuexModule.vuexModule) {
                this.createOne(vuexModule.name, vuexModule.vuexModule);
            } else if (
                isArray(vuexModule) &&
                typeof vuexModule[0] === 'string' &&
                isObject(vuexModule[1])
            ) {
                this.createOne(vuexModule[0], vuexModule[1]);
            }
        });
    }

    static createOne(namePlural, extenderModule) {
        const name = stringSingular(namePlural);
        const nameConstant = stringToConstant(name);
        const nameConstantPlural = stringToConstant(namePlural);

        this.processedWrapper = {
            namePlural,
            nameConstant,
            nameConstantPlural,
            MUTATION_CREATE: `${MUTATION_CREATE}_${nameConstant}`,
            MUTATION_SET: `${MUTATION_SET}_${nameConstantPlural}`,
            MUTATION_UPDATE: `${MUTATION_UPDATE}_${nameConstant}`,
            MUTATION_DELETE: `${MUTATION_DELETE}_${nameConstantPlural}`
        };

        this.processedWrapper.vuexModule = this.formModule();

        this.modulesWrappers[namePlural] = this.processedWrapper;

        this.processedWrapper = null;

        if (extenderModule) {
            this.extend(namePlural, extenderModule);
        }
    }

    static register(name, vuexModule) {
        this.modulesWrappers[name] = {
            name,
            selfRegistered: true,
            vuexModule
        };
    }

    static formModule() {
        const { namePlural } = this.processedWrapper;
        return {
            namespaced: true,
            state: {
                [namePlural]: []
            },
            mutations: this.formMutations()
        };
    }

    static formMutations() {
        const {
            namePlural,
            MUTATION_CREATE,
            MUTATION_SET,
            MUTATION_UPDATE,
            MUTATION_DELETE
        } = this.processedWrapper;

        return {
            [MUTATION_CREATE](state, item) {
                state[namePlural].push(item);
            },
            [MUTATION_SET](state, items) {
                state[namePlural] = items;
            },
            [MUTATION_UPDATE](state, item) {
                const items = state[namePlural];
                arrayUpdateById(items, item.id, item);
            },
            [MUTATION_DELETE](state, ids) {
                const items = state[namePlural];
                ids.forEach(id => {
                    arrayDeleteById(items, id);
                });
            }
        };
    }

    static extend(payload, extenderModule) {
        if (isArray(payload)) {
            this.extendMany(payload);
        } else if (typeof payload === 'string') {
            this.extendOne(payload, extenderModule);
        }
    }

    static extendMany(extenderModules) {
        extenderModules.forEach(extenderModule => {
            if (extenderModule.name && extenderModule.extenderModule) {
                this.extendOne(extenderModule.name, extenderModule.extenderModule);
            } else if (
                isArray(extenderModule) &&
                typeof extenderModule[0] === 'string' &&
                isObject(extenderModule[1])
            ) {
                this.extendOne(extenderModule[0], extenderModule[1]);
            }
        });
    }

    static extendOne(namePlural, extenderModule) {
        let vuexModule = this.modules[namePlural];
        if (!vuexModule) {
            this.modules[namePlural] = {};
            vuexModule = this.modules[namePlural];
        }

        Object.keys(extenderModule).forEach(key => {
            if (!vuexModule[key]) {
                vuexModule[key] = {};
            }
        });

        const { state, getters, mutations, actions } = extenderModule;

        if (state) {
            Object.assign(vuexModule.state, state);
        }

        if (getters) {
            Object.assign(vuexModule.getters, getters);
        }

        if (mutations) {
            Object.assign(vuexModule.mutations, mutations);
        }

        if (actions) {
            Object.assign(vuexModule.actions, actions);
        }
    }

    static createActions(namePlural, Model, extenderActions) {
        const moduleWrapper = this.modulesWrappers[namePlural];
        const {
            MUTATION_CREATE,
            MUTATION_SET,
            MUTATION_UPDATE,
            MUTATION_DELETE
        } = moduleWrapper;

        const name = stringSingular(namePlural);
        const actionCreate = `create${stringCapitalize(name)}`;
        const actionRead = `read${stringCapitalize(namePlural)}`;
        const actionUpdate = `update${stringCapitalize(name)}`;
        const actionDelete = `delete${stringCapitalize(namePlural)}`;

        const actions = {
            async [actionCreate]({ commit }, { data: itemData }) {
                const item = await Model.create(itemData);

                commit(MUTATION_CREATE, item);
            },
            async [actionRead]({ commit }) {
                const items = await Model.read();

                commit(MUTATION_SET, items);
            },
            async [actionUpdate]({ commit }, { data: { id, data } }) {
                const item = await Model.update(id, data);

                commit(MUTATION_UPDATE, item);
            },
            async [actionDelete]({ commit }, ids) {
                await Model.delete(ids);

                commit(MUTATION_DELETE, ids);
            },
            ...extenderActions
        };

        this.extendOne(namePlural, { actions });
    }
};
