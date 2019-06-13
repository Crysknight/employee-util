import { Employee } from '$models';

export default async employeesIds => {
    await Promise.all(employeesIds.map(async id => {
        const employeeDoc = Employee.findById(id);
        await employeeDoc.remove();
    }));
};
