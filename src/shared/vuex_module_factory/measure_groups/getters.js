export default {
    measureGroupById: state => id => {
        return state.measureGroups.find(measureGroup => measureGroup.id === id);
    }
};
