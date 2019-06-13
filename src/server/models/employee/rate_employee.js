import mongoose from 'mongoose';

import { Employee, User } from 'models';

const { ObjectId } = mongoose.Types;

export default async ({ employeeId, userId, skillId, value }) => {
    const employee = await Employee.findById(employeeId);
    const skill = employee.skills.find(skill => skill._id.equals(skillId));
    if (skill) {
        const user = await User.findById(userId);

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

        return { isNew, rate: populatedRate };
    }

    throw new Error('no skill found');
};
