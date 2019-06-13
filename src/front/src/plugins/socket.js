import { SOCKET_ADDRESS } from 'constants';

class EUWebSocket extends WebSocket {
    send(payload) {
        console.log(this.OPEN);
        console.log(payload);
        super.send(payload);
    }
}

const socket = new EUWebSocket(SOCKET_ADDRESS);
window.$socket = socket;

// socket.send('fuck');
socket.addEventListener('open', () => {
    socket.send('shit');
});

export default socket;
