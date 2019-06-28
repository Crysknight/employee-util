import 'core-js/stable';
import 'regenerator-runtime/runtime';

import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import './connection';
import socketServer from './socket_server';
import createStore from './store';

import * as routes from './routes';
import * as models from '$models';
global.$models = models;

createStore(socketServer);

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../front/dist')));
app.use('/static', express.static(path.resolve(__dirname, './static')));

app.use(cors({
    origin(_origin, callback) {
        return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true
}));

app.post('/api/login', routes.login);
app.get('/api/logout', routes.logout);

app.get('/*', (_req, res) => {
	res.sendFile(path.join(__dirname, '../front/dist', 'index.html'));
});

app.listen('3000');
