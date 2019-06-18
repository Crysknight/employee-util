import { Measure, Employee } from '$models';

export default async measuresIds => {
    const employees = await Employee.find();

    await Promise.all(measuresIds.map(async id => {
        const measure = await Measure.findById(id);
        await measure.remove();

        await Promise.all(employees.map(async employee => {
            const measureIndex = employee.measures.findIndex(
                measure => measure.measure.equals(id)
            );

            employee.measures.splice(measureIndex, 1);
            await employee.save();
        }));
    }));
};
