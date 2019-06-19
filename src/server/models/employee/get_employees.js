import { Employee } from '$models';

export default async () => {
    const employees = await Employee.find();
    const populatedEmployees = await Employee.populate(
        employees,
        [
            { path: 'measures.measure' },
            { path: 'measures.rates.user', select: 'login -_id' },
            { path: 'avatar', select: 'path -_id' }
        ]
    );

    const formattedEmployees = populatedEmployees
        .filter(({ name }) => name)
        .map(employee => {
            const formattedEmployee = {
                ...employee.toObject(),
                id: employee._id.toString()
            };

            delete formattedEmployee._id;
            delete formattedEmployee.__v;

            if (employee.avatar) {
                formattedEmployee.avatar = employee.avatar.path;
            }

            formattedEmployee.measures = employee.measures.map(measure => {
                const formattedMeasure = {
                    ...measure.toObject(),
                    id: measure.measure._id.toString(),
                    listId: measure._id.toString(),
                    name: measure.measure.name
                };

                delete formattedMeasure.measure;
                delete formattedMeasure._id;
                delete formattedMeasure.__v;

                formattedMeasure.rates = measure.rates.map(rate => {
                    const formattedRate = {
                        ...rate.toObject(),
                        user: rate.user.login,
                        listId: rate._id.toString()
                    };

                    delete formattedRate._id;
                    delete formattedRate.__v;

                    return formattedRate;
                });

                return formattedMeasure;
            });

            return formattedEmployee;
        });

    return formattedEmployees;
};
