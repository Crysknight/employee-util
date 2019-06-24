import { objectClone } from '$shared/utils';
import { SUBSCRIPTION_MESSAGE_TYPE } from '$shared/constants';
import socketServer from '$socket_server';

export default {
    initialize({ dispatch }) {
        const options = { root: true };
        dispatch('employees/readEmployees', undefined, options);
        dispatch('employeesGroups/readEmployeesGroups', undefined, options);
        dispatch('employeesStatuses/readEmployeesStatuses', undefined, options);
        dispatch('measures/readMeasures', undefined, options);
        dispatch('measuresGroups/readMeasuresGroups', undefined, options);
        dispatch('rates/readRates', undefined, options);
        console.log('store initialized');
    },
    subscribe({ rootState }, { data: moduleNames, userData: { userId } }) {
        const modules = objectClone(rootState);
        Object.keys(modules).forEach(key => {
            if (!moduleNames.includes(key) && key !== moduleNames) {
                delete modules[key];
            }
        });
    
        socketServer.clients.forEach(client => {
            const { userData } = client;
            if (userData && userData.userId === userId) {
                const message = {
                    type: SUBSCRIPTION_MESSAGE_TYPE,
                    modules
                };
    
                client.send(JSON.stringify(message));
            }
        });
    }
};
