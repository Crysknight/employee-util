import {
    MUTATION_SET_MEASURES,
    MUTATION_CREATE_MEASURE,
    MUTATION_DELETE_MEASURES
} from '../../constants';
import { arrayDelete } from '../../utils';

export default {
    [MUTATION_SET_MEASURES](state, measures) {
        state.measures = measures;
    },
    [MUTATION_CREATE_MEASURE](state, measure) {
        state.measures.push(measure);
    },
    [MUTATION_DELETE_MEASURES](state, measuresIds) {
        measuresIds.forEach(id => {
            const measure = state.measures.find(measure => measure.id === id);
            if (measure) {
                arrayDelete(state.measures, measure);
            }
        });
    }
};
