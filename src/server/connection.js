const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://app:jtr5E@127.0.0.1:27017/employeeUtil',
    { useMongoClient: true }
);

const schemas = require('./schemas');

module.exports = Object.keys(schemas).reduce((models, key) => {
    const schema = schemas[key];
    models[key] = mongoose.model(key, schema);

    return models;
}, {});
