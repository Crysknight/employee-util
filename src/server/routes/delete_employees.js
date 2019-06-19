import { Employee, Skill } from '$models';

export default async (req, res) => {
    const { employeesIds } = req.body;
    await Promise.all(employeesIds.map(async id => {
        const employeeDoc = Employee.findById(id);
        await employeeDoc.remove();
    }));

    res.status(200).send('ok');
};
