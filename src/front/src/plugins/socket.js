import router from 'router';
import { SOCKET_ADDRESS } from 'constants';

const socket = new WebSocket(SOCKET_ADDRESS);
socket.addEventListener('error', () => {
    router.push({ name: 'auth' });
});
window.$socket = socket;

export default socket;
