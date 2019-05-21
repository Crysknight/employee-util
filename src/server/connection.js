const mongoose = require('mongoose');

const opts = { user: 'app', pass: 'jtr5E' };
module.exports = mongoose.createConnection(
    '127.0.0.1',
    'employeeUtil',
    27017,
    opts
);

mongoose.Promise = global.Promise;
