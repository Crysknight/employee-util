const { ObjectId } = require('mongoose').Types;

const { Employee, Skill } = require('../models');

module.exports = async (req, res) => {
    const { name, isMentor } = req.body;
    const employee = new Employee({ name, isMentor });
    const skills = await Skill.find();
    employee.skills = skills.map(skill => {
        return {
            skill: ObjectId(skill._id),
            rates: []
        };
    });
    await employee.save();

    const populatedEmployee = await Employee.populate(
        employee,
        [
            { path: 'skills.skill', select: '-id' },
            { path: 'skills.rates.user', select: 'login -id' }
        ]
    );

    const formattedEmployee = populatedEmployee.toObject();
    formattedEmployee.skills = formattedEmployee.skills.map(skill => {
        const formattedSkill = {
            ...skill,
            name: skill.skill.name
        };
        delete formattedSkill.skill;
        delete formattedSkill.__v;

        return formattedSkill;
    });

    res.send(formattedEmployee);
};
