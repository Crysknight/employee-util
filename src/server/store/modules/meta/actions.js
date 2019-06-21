import { objectClone } from '$shared/utils';
import { SUBSCRIPTION_MESSAGE_TYPE } from '$shared/constants';
import socketServer from '$socket_server';

export default {
    initialize({ dispatch }) {
        const options = { root: true };
        dispatch('employees/getEmployees', undefined, options);
        // dispatch('measures/getMeasures', undefined, options);
        console.log('store initialized');
    },
    subscribe({ rootState }, { data: moduleNames, userId }) {
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
