import {
    Employee,
    createEmployee,
    createEmployeeGroup,
    getEmployeesGroups,
    // deleteEmployees,
    // rateEmployee
} from '$models';
import {
    MUTATION_SET_EMPLOYEES,
    MUTATION_CREATE_EMPLOYEE,
    MUTATION_CREATE_EMPLOYEE_GROUP,
    // MUTATION_DELETE_EMPLOYEES,
    // MUTATION_ADD_MEASURE_RATE,
    // MUTATION_CHANGE_MEASURE_RATE
} from '$shared/constants';

export default {
    async getEmployees({ commit }) {
        const employees = await Employee.get();
        const employeesGroups = await getEmployeesGroups();
    
        commit(MUTATION_SET_EMPLOYEES, { employees, employeesGroups });
    },
    async createEmployee({ commit }, { data: employeeData }) {
        const employee = await createEmployee(employeeData);
    
        commit(MUTATION_CREATE_EMPLOYEE, employee);
    },
    async createEmployeeGroup({ commit }, { data: name }) {
        const employeeGroup = await createEmployeeGroup(name);

        commit(MUTATION_CREATE_EMPLOYEE_GROUP, employeeGroup);
    }
    // async deleteEmployees({ commit }, { data: employeesIds }) {
    //     await deleteEmployees(employeesIds);
    
    //     commit(MUTATION_DELETE_EMPLOYEES, employeesIds);
    // },
    // async rateEmployee(
    //     { commit },
    //     { data: { employeeId, measureId, value }, userId }
    // ) {
    //     let result;
    //     try {
    //         result = await rateEmployee({ employeeId, userId, measureId, value });
    //     } catch (_error) {}

    //     if (result) {
    //         const { isNew, rate } = result;
    //         if (isNew) {
    //             commit(MUTATION_ADD_MEASURE_RATE, { employeeId, measureId, rate });
    //         } else {
    //             commit(MUTATION_CHANGE_MEASURE_RATE, { employeeId, measureId, rate });
    //         }
    //     }
    // }
};
