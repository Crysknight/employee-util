import { SOCKET_ADDRESS } from 'constants';

const socket = new WebSocket(SOCKET_ADDRESS);

export default {
    setSocket({ commit }) {
        socket.addEventListener('open', event => {
            
        });
    }
};
