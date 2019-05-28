const passwordHash = require('password-hash');

const { User } = require('../models');

module.exports = async (req, res) => {
    const { login, name, pwd: rawPwd } = req.body;
    const pwd = passwordHash.generate(rawPwd);

    const user = new User({ login, name, pwd });
    await user.save();
    res.send('ok');
};
