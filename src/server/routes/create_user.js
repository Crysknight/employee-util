import passwordHash from 'password-hash';

import { User } from 'models';

export default async (req, res) => {
    const { login, name, pwd: rawPwd } = req.body;
    const pwd = passwordHash.generate(rawPwd);

    const user = new User({ login, name, pwd });
    await user.save();
    res.send('ok');
};
