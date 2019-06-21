import EmployeeGroup from './employee_group';

export default async () => {
    const employeesGroups = await EmployeeGroup.find();

    return employeesGroups.map(employeeGroup => {
        return employeeGroup.toClient();
    });
};
