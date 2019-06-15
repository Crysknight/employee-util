import cookieParser from 'cookie';
import jwt from 'jsonwebtoken';

import { TOKEN_SECRET, SWC_ORIGIN } from '$constants';

export default (info, callback) => {
    if (IS_DEVELOPMENT && info.origin === SWC_ORIGIN) {
        info.req.eu_user = 'slicky';
        callback(true);
        return;
    }

    const { cookie } = info.req.headers;
    if (!cookie) {
        callback(false, 401, 'unauthorized');
    }

    const { eu_token, eu_user, eu_userId } = cookieParser.parse(cookie);

    try {
        jwt.verify(eu_token, TOKEN_SECRET)
    } catch (error) {
        callback(false, 401, 'unauthorized');
    }

    info.req.eu_user = eu_user;
    info.req.eu_userId = eu_userId;
    callback(true);
};
