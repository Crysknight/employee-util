export default ({ dispatch }) => {
    const options = { root: true };
    dispatch('employees/getEmployees', undefined, options);
    console.log('store initialized');
};
