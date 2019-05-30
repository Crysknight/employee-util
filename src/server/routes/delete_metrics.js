const { Skill, Employee } = require('../models');

module.exports = async (req, res) => {
    const { skillId } = req.body;

    await Skill.findByIdAndRemove(skillId);

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
