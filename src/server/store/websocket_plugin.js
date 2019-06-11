const ws = require('ws');
const SocketServer = new ws.Server({ port: 3001 });

module.exports = store => {
    store.subscribe(mutation => {
        SocketServer.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(JSON.stringify(mutation));
            }
        });
    });

    SocketServer.on('connection', Socket => {
        Socket.on('message', message => {
            const action = JSON.parse(message);
            const { type, payload } = action;
            if (type && payload) {
                store.dispatch(type, payload);
            } else if (type) {
                store.dispatch(type);
            }
        });
    });
};
