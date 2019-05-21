const Employee = require('../models/Employee');

module.exports = async (req, res) => {
    const { name } = req.query;
    if (name) {
        const employee = await Employee.findOne({ name });
        res.send(employee);
    } else {
        const employees = await Employee
            .find()
            .populate({
                path: 'skills',
                populate: {
                    path: 'skill',
                    model: 'Skill'
                }
            });
        res.send(employees);
    }
};
