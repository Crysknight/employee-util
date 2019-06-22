import { Employee } from '$models';

export default async (req, res) => {
    const { login, password } = req.body;
    if (typeof login !== 'string' || typeof password !== 'string') {
        res.status(401).send('wrong credentials');
        return;
    }

    const employee = await Employee.login(login, password);
    if (!employee) {
        res.status(401).send('wrong credentials');
    }

    const cookieOptions = {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 48
    };
    const { token, login, name, id } = employee;
    res.cookie('eu_token', token, cookieOptions);
    res.cookie('eu_user', login, cookieOptions);
    res.cookie('eu_userName', name, cookieOptions);
    res.cookie('eu_userId', id, cookieOptions);
    res.status(200).send('ok');
};
