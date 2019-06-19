import { Skill } from '$models';

export default async (req, res) => {
    const skills = await Skill.find();
    res.status(200).send(skills);
};
