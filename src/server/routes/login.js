import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';

import { User } from '$models';
import { TOKEN_SECRET } from '$constants';

export default async (req, res) => {
    const { login, pwd } = req.body;
    if (
        !login ||
        !pwd ||
        typeof login !== 'string' ||
        typeof pwd !== 'string'
    ) {
        res.status(401).send('wrong credentials');
        return;
    }

    const user = await User.findOne({ login });

    if (
        !user ||
        !passwordHash.verify(pwd, user.pwd)
    ) {
        res.status(401).send('wrong credentials');
        return;
    }

    const token = jwt.sign(
        { userId: user._id, userName: user.login },
        TOKEN_SECRET
    );

    debugger;

    user.token = token;
    await user.save();

    const cookieOptions = {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 48
    };

    res.cookie('eu_token', user.token, cookieOptions);
    res.cookie('eu_user', user.login, cookieOptions);
    res.cookie('eu_userName', user.name, cookieOptions);
    res.cookie('eu_userId', user._id.toString(), cookieOptions);
    res.status(200).send('ok');
};
