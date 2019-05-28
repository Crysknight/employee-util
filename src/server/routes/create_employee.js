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
    res.send(employee);
};
