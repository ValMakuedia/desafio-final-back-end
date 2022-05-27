const express = require('express');
const { registerUser, loginUser, updateUser } = require('./controllers/user');
const {verifyLogin} = require('./middleware/verifyLogin.js')
const routes = express();

routes.post('/user', registerUser);
routes.post('/login', loginUser);

routes.use(verifyLogin)

routes.put('/user', updateUser);

module.exports = routes;