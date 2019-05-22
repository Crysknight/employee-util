const { Skill } = require('../connection');

module.exports = async (req, res) => {
    const { name } = req.data;
    await Skill.insertOne({ name });
    res.send('ok');
};
