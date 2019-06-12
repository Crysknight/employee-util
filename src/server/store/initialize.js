export default async ({ dispatch }) => {
    await dispatch('employees/getEmployees');
    console.log('store initialized');
};
