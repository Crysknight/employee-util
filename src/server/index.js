const app = require('express')();
const mongoose = require('mongoose');

const routes = require('./routes');

app.get('/', () => {
    console.log('its alive');
});

app.get('/api/employee', routes.getEmployees);
app.post('/api/employee', routes.createEmployee);
app.post('/api/skill', routes.createSkill);

app.listen('3000');
console.log('Listening on port 3000');
