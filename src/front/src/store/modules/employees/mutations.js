import {
    MUTATION_INIT_EMPLOYEES_DELETION,
    MUTATION_TOGGLE_EMPLOYEE_DELETION,
    MUTATION_CANCEL_EMPLOYEES_DELETION
} from 'constants';
import { arrayToggle } from 'shared/utils';

export default {
    [MUTATION_INIT_EMPLOYEES_DELETION](state) {
        state.isDeleteModeOn = true;
    },
    [MUTATION_TOGGLE_EMPLOYEE_DELETION](state, employee) {
        if (state.isDeleteModeOn) {
            arrayToggle(state.employeesToDelete, employee);
        }
    },
    [MUTATION_CANCEL_EMPLOYEES_DELETION](state) {
        state.employeesToDelete = [];
        state.isDeleteModeOn = false;
    }
};
