import { SOCKET_ADDRESS } from 'constants';

const socket = new WebSocket(SOCKET_ADDRESS);
window.$socket = socket;

export default socket;
