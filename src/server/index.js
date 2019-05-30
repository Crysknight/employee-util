const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const app = express();
require('./connection');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../front/dist')));
app.use('/static', express.static(path.resolve(__dirname, './static')));

app.use(cors({
    origin(origin, callback) {
        return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true
}));


app.use('/api/*', routes.checkAuth);

app.post('/api/user', routes.createUser);
app.post('/api/login', routes.login);
app.get('/api/logout', routes.logout);
app.get('/api/employee', routes.getEmployees);
app.post('/api/employee', routes.createEmployee);
app.post('/api/metrics', routes.createMetrics);
app.delete('/api/metrics', routes.deleteMetrics);
app.post('/api/rate', routes.rate);
app.post('/api/avatar', routes.uploadAvatar);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../front/dist', 'index.html'));
});

app.listen('3000');
console.log('Listening on port 3000');
