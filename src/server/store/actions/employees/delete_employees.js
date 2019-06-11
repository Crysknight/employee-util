import { Employee } from 'models';
import { MUTATION_DELETE_EMPLOYEES } from 'shared/constants';

export default async ({ commit }, employeesIds) => {
    await Promise.all(employeesIds.map(async id => {
        const employeeDoc = Employee.findById(id);
        await employeeDoc.remove();
    }));

    commit(MUTATION_DELETE_EMPLOYEES, employeesIds);
};
