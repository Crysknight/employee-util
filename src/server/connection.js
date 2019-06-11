import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://app:jtr5E@127.0.0.1:27017/employeeUtil',
    { useMongoClient: true }
);
