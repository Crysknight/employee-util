import {
    MUTATION_SET_EMPLOYEES,
    MUTATION_CREATE_EMPLOYEE,
    MUTATION_DELETE_EMPLOYEES,
    MUTATION_ADD_MEASURE_RATE,
    MUTATION_CHANGE_MEASURE_RATE,
    MUTATION_CREATE_MEASURE,
    MUTATION_DELETE_MEASURES
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
    },
    [MUTATION_ADD_MEASURE_RATE](_state, { measure, rate }) {
        measure.rates.push(rate);
    },
    [MUTATION_CHANGE_MEASURE_RATE](_state, { measure, rate }) {
        const targetRate = measure.rates.find(localRate => localRate.user === rate.user);
        targetRate.value = rate.value;
    },
    [MUTATION_CREATE_MEASURE](state, measure) {
        state.employees.forEach(employee => {
            employee.measures.push(measure);
        });
    },
    [MUTATION_DELETE_MEASURES](state, measuresIds) {
        state.employees.forEach(employee => {
            employee.measures = employee.measures.filter(
                ({ id }) => !measuresIds.includes(id)
            );
        });
    }
};
