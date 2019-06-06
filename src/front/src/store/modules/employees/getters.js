export default {
    employeeById: state => id => {
        return state.find(employee => employee._id === id);
    },
    isNoEmployeesToDelete(state) {
        return state.employeesToDelete.length === 0;
    },
    isEmployeeToDelete: state => employee => {
        return state.employeesToDelete.includes(employee);
    }
};
