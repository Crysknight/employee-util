import { rateEmployee } from '$models';
import { MUTATION_ADD_MEASURE_RATE, MUTATION_CHANGE_MEASURE_RATE } from '$shared/constants';

export default async ({ commit }, { employee, skill, value }) => {
    const employeeId = employee._id;
    const skillId = skill._id;
    const userId = 'wtf?';

    let result;
    try {
        result = await rateEmployee({ employeeId, userId, skillId, value });
    } catch (error) {
        result = 'failed';
    }
    if (result !== 'failed') {
        const { isNew, rate } = result;
        if (isNew) {
            commit(MUTATION_ADD_MEASURE_RATE, { skill, rate });
        } else {
            commit(MUTATION_CHANGE_MEASURE_RATE, { skill, rate });
        }
    }
};
