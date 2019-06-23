export default {
    employeesByGroup: state => id => {
        return state.employees.filter(({ groups }) => groups.includes(id));
    }
};
