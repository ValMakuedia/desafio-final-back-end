const express = require('express');
const users = require('./controllers/user');

const routes = express();

routes.post('/user', users.registerUser);
routes.put('/users/:id', users.updateUser);

module.exports = routes;