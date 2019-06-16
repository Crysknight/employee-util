import { socketManager } from 'plugins';
import { MESSAGE_WEBSOCKET_FAILURE } from 'constants';

import handleMutation from './handle_mutation';

export default store => {
    socketManager.addEventListener('message', message => {
        handleMutation(message, store);
    });

    const dispatchErrorMessage = () => {
        store.dispatch(
            'interface/showMessage',
            { type: 'error', text: MESSAGE_WEBSOCKET_FAILURE, selfDestroy: 10000 }
        );
    };

    socketManager.addEventListener('error', dispatchErrorMessage);
    socketManager.addEventListener('close', dispatchErrorMessage);
};
