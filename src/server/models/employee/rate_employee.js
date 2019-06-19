import mongoose from 'mongoose';

import { Employee, User } from '$models';

const { ObjectId } = mongoose.Types;

export default async ({ employeeId, userId, measureId, value }) => {
    const employee = await Employee.findById(employeeId);
    const measure = employee.measures.find(({ measure }) => measure.equals(measureId));
    if (measure) {
        const user = await User.findById(userId);

        let rate = measure.rates.find(rate => rate.user.equals(user._id));
        let isNew = false;
        if (!rate) {
            isNew = true;
            rate = {
                _id: ObjectId(),
                user: ObjectId(user._id),
                value
            };
            measure.rates.push(rate);
        } else {
            rate.value = value;
        }

        await employee.save();

        const populatedRate = {
            listId: rate._id.toString(),
            value: rate.value,
            user: user.login
        };

        return { isNew, rate: populatedRate };
    }

    throw new Error('no skill found');
};
