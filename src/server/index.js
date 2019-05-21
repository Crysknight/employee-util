const app = require('express')();
const mongoose = require('mongoose');

const routes = require('./routes');

app.get('/api/employee', routes.getEmployees);

app.listen('3000');
console.log('Listening on port 3000');
