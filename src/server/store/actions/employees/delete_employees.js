import { deleteEmployees } from '$models';
import { MUTATION_DELETE_EMPLOYEES } from '$shared/constants';

export default async ({ commit }, employeesIds) => {
    await deleteEmployees(employeesIds);

    commit(MUTATION_DELETE_EMPLOYEES, employeesIds);
};
