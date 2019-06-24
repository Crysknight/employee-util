export default {
    isNoEmployeesToDelete(state) {
        return state.employeesToDelete.length === 0;
    },
    isEmployeeToDelete: state => employee => {
        return state.employeesToDelete.includes(employee);
    }
};
