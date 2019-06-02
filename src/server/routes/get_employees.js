const { Employee } = require('../models');

module.exports = async (req, res) => {
    const { name } = req.query;
    if (name) {
        const employee = await Employee.findOne({ name });
        res.send(employee);
    } else {
        const employees = await Employee.find();
        const populatedEmployees = await Employee.populate(
            employees,
            [
                { path: 'skills.skill', select: '-_id' },
                { path: 'skills.rates.user', select: 'login -_id' },
                { path: 'avatar', select: 'path -_id' }
            ]
        );
        const formattedEmployees = populatedEmployees
            .filter(({ name }) => name)
            .map(employee => {
                const formattedEmployee = { ...employee.toObject() };

                if (employee.avatar) {
                    formattedEmployee.avatar = employee.avatar.path;
                }

                formattedEmployee.skills = employee.skills.map(skill => {
                    const formattedSkill = {
                        ...skill.toObject(),
                        name: skill.skill.name
                    };
                    delete formattedSkill.skill;
                    delete formattedSkill.__v;
                    formattedSkill.rates = skill.rates.map(rate => {
                        const formattedRate = {
                            ...rate.toObject(),
                            user: rate.user.login
                        };

                        return formattedRate;
                    });

                    return formattedSkill;
                });

                return formattedEmployee;
            });

        res.send(formattedEmployees);
    }
};
