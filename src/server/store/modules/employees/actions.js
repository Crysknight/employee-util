import {
    getEmployees,
    createEmployee,
    deleteEmployees,
    rateEmployee
} from '$models';
import {
    MUTATION_SET_EMPLOYEES,
    MUTATION_CREATE_EMPLOYEE,
    MUTATION_DELETE_EMPLOYEES,
    MUTATION_ADD_MEASURE_RATE,
    MUTATION_CHANGE_MEASURE_RATE
} from '$shared/constants';

export default {
    async getEmployees({ commit }) {
        const employees = await getEmployees();
    
        commit(MUTATION_SET_EMPLOYEES, employees);
    },
    async createEmployee({ commit }, employeeData) {
        const employee = await createEmployee(employeeData);
    
        commit(MUTATION_CREATE_EMPLOYEE, employee);
    },
    async deleteEmployee({ commit }, employeesIds) {
        await deleteEmployees(employeesIds);
    
        commit(MUTATION_DELETE_EMPLOYEES, employeesIds);
    },
    async rateEmployee({ commit }, { employee, skill, value }) {
        const employeeId = employee._id;
        const skillId = skill._id;
        const userId = 'wtf?';
    
        let result;
        try {
            result = await rateEmployee({ employeeId, userId, skillId, value });
        } catch (error) {
            result = 'failed';
        }
        if (result !== 'failed') {
            const { isNew, rate } = result;
            if (isNew) {
                commit(MUTATION_ADD_MEASURE_RATE, { skill, rate });
            } else {
                commit(MUTATION_CHANGE_MEASURE_RATE, { skill, rate });
            }
        }
    }
};
