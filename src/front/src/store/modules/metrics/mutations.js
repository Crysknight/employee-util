import { arrayDelete } from 'shared/utils';
import {
    MUTATION_SET_METRICS,
    MUTATION_CREATE_METRICS,
    MUTATION_DELETE_METRICS
} from 'constants';

export default {
    [MUTATION_SET_METRICS](state, metrics) {
        state.metrics = metrics;
    },
    [MUTATION_CREATE_METRICS](state, metrics) {
        state.metrics.push(metrics);
    },
    [MUTATION_DELETE_METRICS](state, metrics) {
        arrayDelete(state.metrics, metrics);
    }
};
