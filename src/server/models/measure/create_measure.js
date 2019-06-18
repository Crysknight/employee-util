import { Measure, Employee } from '$models';

export default async name => {
    const measure = new Measure({ name });
    await measure.save();

    const employees = await Employee.find();
    await Promise.all(employees.map(async employee => {
        employee.measures.push({ measure: measure._id, rates: [] });
        await employee.save();
    }));

    const formattedMeasure = measure.toObject();
    formattedMeasure.id = formattedMeasure._id.toString();
    delete formattedMeasure._id;
    delete formattedMeasure.__v;

    return formattedMeasure;
};
