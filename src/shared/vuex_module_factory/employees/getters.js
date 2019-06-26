export default {
    populatedEmployees(state, _getters, _rootState, rootGetters) {
        console.log(new Date().getTime());

        const employeeMeasureGroups = rootGetters['measureGroups/employeeMeasureGroups'];
        const measuresByGroup = rootGetters['measures/measuresByGroup'];
        const ratesByMeasure = rootGetters['rates/ratesByMeasure'];

        return state.employees.map(employee => {
            const populatedEmployee = {
                ...employee
            };

            populatedEmployee.measureGroups = employeeMeasureGroups(employee.employeeGroups);

            populatedEmployee.measureGroups = populatedEmployee.measureGroups.map(group => {
                const populatedGroup = {
                    name: group.name,
                    measures: measuresByGroup(group)
                };

                populatedGroup.measures = populatedGroup.measures.map(({ id, name }) => {
                    const populatedMeasure = { id, name };

                    populatedMeasure.rates = ratesByMeasure(id);

                    return populatedMeasure;
                });

                return populatedGroup;
            });

            return populatedEmployee;
        });
    },
    populatedEmployeesByGroup: (state, getters) => id => {
        return getters.populatedEmployees.filter(
            ({ employeeGroups }) => employeeGroups.includes(id)
        );
    }
};
