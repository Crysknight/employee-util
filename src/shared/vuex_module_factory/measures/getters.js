import { MEASURE_GROUP_TYPES } from '../../constants';

export default {
    measuresByGroup: state => ({ id, employeeGroup, type }) => {
        if (id && type === MEASURE_GROUP_TYPES.MAIN) {
            return state.measures.filter(({ measureGroup }) => measureGroup === id);
        } else if (employeeGroup && type === MEASURE_GROUP_TYPES.BY_EMPLOYEE_GROUP) {
            return state.measures.filter(
                ({ employeeGroups }) => employeeGroups.includes(employeeGroup)
            );
        } else if (type === MEASURE_GROUP_TYPES.GENERIC) {
            return state.measures.filter(
                ({ measureGroup, employeeGroups }) => (
                    !measureGroup &&
                    (!employeeGroups || employeeGroups.length === 0)
                )
            );
        }
    }
};
