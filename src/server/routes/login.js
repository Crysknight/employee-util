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
    res.cookie('eu_token', employee.token, cookieOptions);
    res.cookie('eu_user', employee.login, cookieOptions);
    res.cookie('eu_userName', employee.name, cookieOptions);
    res.cookie('eu_userId', employee.id, cookieOptions);
    res.status(200).send('ok');
};
