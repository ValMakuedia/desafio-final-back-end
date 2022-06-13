const express = require('express');
const { registerUser, loginUser, updateUser } = require('./controllers/user');
const { registerClient, getAClient, getClients, updateClient } = require('./controllers/client')
const { verifyLogin } = require('./middleware/verifyLogin.js')
const { registerTransaction, getTransactions, getTransactionPending, getTransactionPayd, updateTransaction, deleteTransaction } = require('./controllers/transaction')

const routes = express();



routes.post('/user', registerUser);
routes.post('/login', loginUser);

routes.use(verifyLogin)

routes.put('/user', updateUser);

routes.post('/client', registerClient);
routes.get('/client', getAClient);
routes.get('/clients', getClients);
routes.put('/client', updateClient);

routes.post('/transaction', registerTransaction);
routes.get('/transaction', getTransactions);
routes.get('/pending', getTransactionPending);
routes.get('/payd', getTransactionPayd);
routes.put('/transaction', updateTransaction);
routes.delete('/transaction/:id', deleteTransaction);




module.exports = routes;