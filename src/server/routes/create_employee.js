const { Employee, Skill } = require('../connection');

module.exports = async (req, res) => {
    const { name, isMentor, avatar = 'default.png' } = req.data;
    const employee = new Employee({ name, isMentor, avatar });
    await employee.save();
    res.send('ok');
};
