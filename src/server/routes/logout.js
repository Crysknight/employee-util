import { Employee } from '$models';

export default async (req, res) => {
    const { eu_token: token } = req.cookies;
    await Employee.logout(token);

    await user.save();

    res.clearCookie('eu_token');
    res.clearCookie('eu_user');
    res.clearCookie('eu_userName');
    res.clearCookie('eu_userId');
    res.status(200).send('ok');
};
