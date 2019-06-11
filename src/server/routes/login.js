import passwordHash from 'password-hash';
import tokenGeneratorFactory from 'token-generator';

import { User } from 'models';

const tokenGenerator = tokenGeneratorFactory({
    salt: 'kowalskyanalysis',
    timestampMap: 'agvh5454da'
});

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

    user.token = tokenGenerator.generate();
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
