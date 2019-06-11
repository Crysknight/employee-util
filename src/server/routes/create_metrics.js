import { Skill, Employee } from 'models';

export default async (req, res) => {
    const { name } = req.body;
    const skill = new Skill({ name });
    await skill.save();

    const employees = await Employee.find();
    await Promise.all(employees.map(async employee => {
        employee.skills.push({ skill: skill._id, rates: [] });
        await employee.save();
    }));

    res.status(200).send(skill);
};
