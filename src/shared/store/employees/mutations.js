import {
    MUTATION_SET_EMPLOYEES,
    MUTATION_CREATE_EMPLOYEE,
    MUTATION_CREATE_EMPLOYEE_GROUP,
    MUTATION_DELETE_EMPLOYEES,
    MUTATION_ADD_MEASURE_RATE,
    MUTATION_CHANGE_MEASURE_RATE,
    MUTATION_CREATE_MEASURE,
    MUTATION_DELETE_MEASURES
} from '../../constants';
import { arrayDelete } from '../../utils';

export default {
    [MUTATION_SET_EMPLOYEES](
        state,
        { employees, employeesGroups, employeesStatuses }
    ) {
        state.employees = employees;
        state.employeesGroups = employeesGroups;
        state.employeesStatuses = employeesStatuses;
    },
    [MUTATION_CREATE_EMPLOYEE](state, employee) {
        state.employees.push(employee);
    },
    [MUTATION_CREATE_EMPLOYEE_GROUP](state, employeeGroup) {
        state.employeesGroups.push(employeeGroup);
    },
    [MUTATION_DELETE_EMPLOYEES](state, employeesIds) {
        employeesIds.forEach(id => {
            const employee = state.employees.find(employee => employee.id === id);
            if (employee) {
                arrayDelete(state.employees, employee);
            }
        });
    },
    [MUTATION_ADD_MEASURE_RATE](state, { employeeId, measureId, rate }) {
        const employee = state.employees.find(({ id }) => id === employeeId);
        if (!employee) {
            return;
        }

        const measure = employee.measures.find(({ id }) => id === measureId);
        if (!measure) {
            return;
        }

        measure.rates.push(rate);
    },
    [MUTATION_CHANGE_MEASURE_RATE](state, { employeeId, measureId, rate }) {
        const employee = state.employees.find(({ id }) => id === employeeId);
        if (!employee) {
            return;
        }

        const measure = employee.measures.find(({ id }) => id === measureId);
        if (!measure) {
            return;
        }

        const targetRate = measure.rates.find(localRate => localRate.listId === rate.listId);
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
