export default {
    ratesByMeasure: state => measureId => {
        return state.rates.filter(({ measure }) => (measure === measureId));
    }
};
