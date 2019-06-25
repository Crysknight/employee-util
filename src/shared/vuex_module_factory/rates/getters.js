export default {
    ratesByEmployeeAndMeasure: state => (employeeId, measureId) => {
        return state.rates.filter(
            ({ employee, measure }) => (
                employee === employeeId ||
                measure === measureId
            )
        );
    }
};
