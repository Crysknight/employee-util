export default {
    groupedMeasures: (state, _getters, rootState, rootGetters) => employeesGroupId => {
        return state.measures.reduce((measureGroups, measure) => {
            const measureGroupById = rootGetters['measureGroups/measureGroupById'];
            const measureGroups = measure.measureGroups.map(id => measureGroupById(id));
            
        }, {});
    }
};