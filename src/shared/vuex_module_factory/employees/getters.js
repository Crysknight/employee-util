export default {
    employeesByGroup: state => groupId => {
        return state.employees.filter(
            ({ employeeGroups }) => employeeGroups.includes(groupId)
        );
    },
    employeeCountByGroup: (_state, { employeesByGroup }) => groupId => {
        return employeesByGroup(groupId).length;
    }
};
