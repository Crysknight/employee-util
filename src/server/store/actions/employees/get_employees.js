import { getEmployees } from '$models';
import { MUTATION_SET_EMPLOYEES } from '$shared/constants';

export default async ({ commit }) => {
    const employees = await getEmployees();

    commit(MUTATION_SET_EMPLOYEES, employees);
};
