const { Skill } = require('../models');

module.exports = async (req, res) => {
    const skills = await Skill.find();
    res.status(200).send(skills);
};
