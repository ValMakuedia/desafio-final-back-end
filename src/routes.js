const express = require('express');
const { registerUser, loginUser, updateUser } = require('./controllers/user');
const { registerClient } = require('./controllers/client')
const { verifyLogin } = require('./middleware/verifyLogin.js')

const routes = express();



routes.post('/user', registerUser);
routes.post('/login', loginUser);

routes.use(verifyLogin)

routes.put('/user', updateUser);

routes.post('/client', registerClient);

module.exports = routes;