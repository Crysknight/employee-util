import ws from 'ws';

import verifyClient from './verify_client';

export default new ws.Server({
    port: 3001,
    verifyClient
});
