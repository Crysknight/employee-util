import { createEmployee } from 'models';
import { MUTATION_CREATE_EMPLOYEE } from 'shared/constants';

export default async ({ commit }, employeeData) => {
    const employee = await createEmployee(employeeData);

    commit(MUTATION_CREATE_EMPLOYEE, employee);
};
