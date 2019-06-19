import jwt from 'jsonwebtoken';

import { TOKEN_SECRET } from '$constants';

export default async (req, res, next) => {
    const { eu_token: token } = req.cookies;
    if (jwt.verify(token, TOKEN_SECRET)) {
        next();
    } else {
        res.status(401).send('unauthorized');
    }
};
