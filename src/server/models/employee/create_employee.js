import mongoose from 'mongoose';

import { Employee, Measure } from '$models';

const { ObjectId } = mongoose.Types;

export default async employeeData => {
    const employee = new Employee(employeeData);
    const measures = await Measure.find();
    employee.measures = measures.map(measure => {
        return {
            measure: ObjectId(measure._id),
            rates: []
        };
    });
    await employee.save();

    const populatedEmployee = await Employee.populate(
        employee,
        [
            { path: 'measures.measure', select: '-id' },
            { path: 'measures.rates.user', select: 'login -id' }
        ]
    );

    const formattedEmployee = populatedEmployee.toObject();

    formattedEmployee.id = formattedEmployee._id.toString();
    delete formattedEmployee._id;

    formattedEmployee.measures = formattedEmployee.measures.map(measure => {
        const formattedMeasure = {
            ...measure,
            id: measure.measure._id.toString(),
            listId: measure._id.toString(),
            name: measure.measure.name
        };

        delete formattedMeasure.measure;
        delete formattedMeasure._id;
        delete formattedMeasure.__v;

        return formattedMeasure;
    });

    return formattedEmployee;
};
