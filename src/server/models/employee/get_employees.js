import { Employee } from 'models';

export default async () => {
    const employees = await Employee.find();
    const populatedEmployees = await Employee.populate(
        employees,
        [
            { path: 'measures.measure', select: '-_id' },
            { path: 'measures.rates.user', select: 'login -_id' },
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

            formattedEmployee.measures = employee.measures.map(measure => {
                const formattedMeasure = {
                    ...measure.toObject(),
                    name: measure.measure.name
                };
                delete formattedMeasure.measure;
                delete formattedMeasure.__v;
                formattedMeasure.rates = measure.rates.map(rate => {
                    const formattedRate = {
                        ...rate.toObject(),
                        user: rate.user.login
                    };

                    return formattedRate;
                });

                return formattedMeasure;
            });

            return formattedEmployee;
        });

    return formattedEmployees;
};
