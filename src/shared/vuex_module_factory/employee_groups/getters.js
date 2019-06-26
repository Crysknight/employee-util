export default {
    employeeGroupById: state => id => {
        return state.employeeGroups.find(employeeGroup => employeeGroup.id === id);
    }
};
