import ws from 'ws';
import jwt from 'jsonwebtoken';

import { TOKEN_SECRET } from 'constants';

const socketServer = new ws.Server({
    port: 3001,
    verifyClient(info, callback) {
        if (IS_DEVELOPMENT) {
            console.log('access granted, you slicky!');
            // here be real user from db
            info.req.eu_user = 'slicky';
            callback(true);
            return;
        }

        const { token: rawToken } = info.req.headers;

        let token;
        try {
            token = jwt.verify(rawToken, TOKEN_SECRET)
        } catch (error) {
            callback(false, 401, 'unauthorized');
        }

        info.req.eu_user = token;
        callback(true);
    }
});

export default store => {
    store.subscribe(mutation => {
        socketServer.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(JSON.stringify(mutation));
            }
        });
    });

    socketServer.on('connection', (socket, request) => {
        socket.on('message', message => {
            const action = JSON.parse(message);
            const { type, payload } = action;

            console.log(request);
            debugger;

            store.dispatch(type, payload);
        });
    });
};
