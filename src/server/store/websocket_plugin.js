import ws from 'ws';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie';

import { TOKEN_SECRET, SWC_ORIGIN } from '$constants';

const socketServer = new ws.Server({
    port: 3001,
    verifyClient(info, callback) {
        if (IS_DEVELOPMENT && info.origin === SWC_ORIGIN) {
            // here be real user from db
            info.req.eu_user = 'slicky';
            callback(true);
            return;
        }

        const { cookie } = info.req.headers;
        const { eu_token } = cookieParser.parse(cookie);

        let token;
        try {
            token = jwt.verify(eu_token, TOKEN_SECRET)
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
            let action;
            try {
                action = JSON.parse(message);
            } catch (error) {
                socket.send('wrong payload format, JSON required', error);
                return;
            }

            const { type, payload } = action;

            try {
                store.dispatch(type, payload);
            } catch (error) {
                socket.send('wrong action type', error);
            }
        });
    });
};
