import EmployeeGroup from './employee_group';

export default async name => {
    const employeeGroup = new EmployeeGroup({ name });

    await employeeGroup.save();

    return employeeGroup.toClient();
};
