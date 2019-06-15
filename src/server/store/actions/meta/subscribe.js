import { objectClone } from '$shared/utils';
import socketServer from '$socket_server';
import { MESSAGE_TYPE_SUBSCRIPTION } from '$constants';

export default ({ rootState }, { data: moduleNames, userId }) => {
    const modules = objectClone(rootState);
    Object.keys(modules).forEach(key => {
        if (!moduleNames.includes(key) && key !== moduleNames) {
            delete modules[key];
        }
    });

    socketServer.clients.forEach(client => {
        const { userData } = client;
        if (userData && userData.userId === userId) {
            const payload = {
                type: MESSAGE_TYPE_SUBSCRIPTION,
                modules
            };

            client.send(JSON.stringify(payload));
        }
    });
};
