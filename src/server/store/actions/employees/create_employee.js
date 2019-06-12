import mongoose from 'mongoose';

import { Employee, Measure } from 'models';
import { MUTATION_CREATE_EMPLOYEE } from 'shared/constants';

const { ObjectId } = mongoose.Types;

export default async ({ commit }, employeeData) => {
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
    formattedEmployee.measures = formattedEmployee.measures.map(measure => {
        const formattedMeasure = {
            ...measure,
            name: measure.measure.name
        };
        delete formattedMeasure.measure;
        delete formattedMeasure.__v;

        return formattedMeasure;
    });

    commit(MUTATION_CREATE_EMPLOYEE, formattedEmployee);
};
