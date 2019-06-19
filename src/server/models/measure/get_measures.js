import { Measure } from '$models';

export default async () => {
    const measures = await Measure.find().lean();

    const formattedMeasures = measures.map(measure => {
        const formattedMeasure = {
            ...measure,
            id: measure._id.toString()
        };

        delete formattedMeasure._id;
        delete formattedMeasure.__v;

        return formattedMeasure;
    });

    return formattedMeasures;
};
