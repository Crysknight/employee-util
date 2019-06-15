import handleMessage from './handle_message';

export default socketServer => store => {
    store.subscribe(mutation => {
        socketServer.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(JSON.stringify(mutation));
            }
        });
    });

    socketServer.on('connection', (socket, request) => {
        const { eu_user, eu_userId } = request;
        const userData = { user: eu_user, userId: eu_userId };
        socket.userData = userData;

        socket.on('message', message => {
            handleMessage(message, socket, userData, store);
        });
    });
};
