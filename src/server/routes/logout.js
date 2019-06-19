import { User } from '$models';

export default async (req, res) => {
    const { eu_token: token } = req.cookies;
    const user = await User.findOne({ token });
    delete user.token;

    await user.save();

    const cookieOptions = {
        httpOnly: false,
        maxAge: 0
    };

    res.cookie('eu_token', 'delete', cookieOptions);
    res.cookie('eu_user', 'delete', cookieOptions);
    res.cookie('eu_userName', 'delete', cookieOptions);
    res.cookie('eu_userId', 'delete', cookieOptions);
    res.status(200).send('ok');
};
