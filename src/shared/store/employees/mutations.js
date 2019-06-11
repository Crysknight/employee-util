import {
    MUTATION_SET_EMPLOYEES,
    MUTATION_CREATE_EMPLOYEE,
    MUTATION_DELETE_EMPLOYEES
} from '../../constants';
import { arrayDelete } from '../../utils';

export default {
    [MUTATION_SET_EMPLOYEES](state, employees) {
        state.employees = employees;
    },
    [MUTATION_CREATE_EMPLOYEE](state, employee) {
        state.employees.push(employee);
    },
    [MUTATION_DELETE_EMPLOYEES](state, employeesIds) {
        employeesIds.forEach(id => {
            const employee = state.employees.find(({ _id }) => _id === id);
            if (employee) {
                arrayDelete(state.employees, employee);
            }
        });
    }
};
