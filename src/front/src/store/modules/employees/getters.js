export default {
    employeeById: state => id => {
        return state.find(employee => employee._id === id);
    }
};
