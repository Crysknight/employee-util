import mongoose from 'mongoose';

import { FormatPlugin } from '$utils';

mongoose.Promise = global.Promise;

mongoose.plugin(FormatPlugin);

mongoose.connect(
    'mongodb://app:jtr5E@127.0.0.1:27017/employeeUtil',
    { useMongoClient: true }
);
