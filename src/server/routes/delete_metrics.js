import { Employee, Skill } from '$models';

export default async (req, res) => {
    const { skillId } = req.body;

    const skill = await Skill.findById(skillId);
    await skill.remove();

    const employees = await Employee.find();
    await Promise.all(employees.map(async employee => {
        const skillIndex = employee.skills.findIndex(
            skill => skill.skill.equals(skillId)
        );
        employee.skills.splice(skillIndex, 1);
        await employee.save();
    }));

    res.status(200).send('ok');
};
