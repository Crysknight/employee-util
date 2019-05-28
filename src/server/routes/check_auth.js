const { User } = require('../models');

module.exports = async (req, res, next) => {
    if (req.baseUrl === '/api/login') {
        next();
        return;
    }

    const { eu_token: token } = req.cookies;
    if (token) {
        const user = await User.findOne({ token });
        if (user) {
            next();
            return;
        }
    }

    res.status(401).send('unauthorized');
};
