export default {
    populatedEmployees(state, getters, rootState, rootGetters) {
        return state.employees.map(employee => {
            const populatedEmployee = {
                ...employee
            };

            populatedEmployee.measureGroups
        });
    },
    populatedEmployeesByGroup: (state, getters) => id => {
        return getters.populatedEmployees.filter(
            ({ groups }) => groups.includes(id)
        );
    }
};
