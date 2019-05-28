const { ObjectId } = require('mongoose').Types;

const { Employee, User } = require('../models');

module.exports = async (req, res) => {
    const { employeeId, skillId, value } = req.body;
    const employee = await Employee.findById(employeeId);
    const skill = employee.skills.find(skill => skill._id.equals(skillId));
    if (skill) {
        const { eu_token: token } = req.cookies;
        const user = await User.findOne({ token });

        let rate = skill.rates.find(rate => rate.user.equals(user._id));
        let isNew = false;
        if (!rate) {
            isNew = true;
            rate = { user: ObjectId(user._id), value };
            skill.rates.push(rate);
        } else {
            rate.value = value;
        }

        await employee.save();

        const populatedRate = {
            _id: rate._id,
            value: rate.value,
            user: user.login
        };
        res.status(200).send({ isNew, rate: populatedRate });
        return;
    }

    res.status(400).send('no skill found');
};
