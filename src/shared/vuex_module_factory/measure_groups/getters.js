import { arrayMatch } from '../../utils';
import { MEASURE_GROUP_TYPES } from '../../constants';

export default {
    measureGroupById: state => id => {
        return state.measureGroups.find(group => group.id === id);
    },
    employeeMeasureGroups: (state, _getters, _rootState, rootGetters) => employeeGroupIds => {
        const mainGroups = state.measureGroups
            .filter(({ employeeGroups }) => {
                return (
                    !employeeGroups ||
                    employeeGroups.length === 0 ||
                    arrayMatch(employeeGroups, employeeGroupIds)
                );
            })
            .map(({ id, name }) => {
                return {
                    id,
                    name,
                    type: MEASURE_GROUP_TYPES.MAIN
                };
            });

        const employeeGroupById = rootGetters['employeeGroups/employeeGroupById'];
        const employeeGroups = employeeGroupIds.map(id => employeeGroupById(id));
        const groupsByEmployeeGroup = employeeGroups.map(({ id, name }) => {
            return {
                employeeGroup: id,
                name,
                type: MEASURE_GROUP_TYPES.BY_EMPLOYEE_GROUP
            };
        });

        const genericGroup = { name: 'Общее', type: MEASURE_GROUP_TYPES.GENERIC };

        return [...mainGroups, ...groupsByEmployeeGroup, genericGroup];
    }
};
