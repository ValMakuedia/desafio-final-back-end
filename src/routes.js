const express = require('express');
const { registerUser, loginUser, updateUser } = require('./controllers/user');
const { registerClient, updateClient } = require('./controllers/client')
const { verifyLogin } = require('./middleware/verifyLogin.js')
const { registerTransaction, updateTransaction, deleteTransaction } = require('./controllers/transaction')
const { getTransactions, getTransactionPayd, getTransactionPendent, getATransaction } = require('./controllers/getTransaction')
const { getAClient, getClients, getClientsDefauter, getClientsOnday } = require('./controllers/getClient');
const { searchClients, searchTransactions } = require('./controllers/search')
const { counTransactionOverdue, counTransactionPayd, counTransactionPendent, countClientDefauter, countClientOnday } = require('./middleware/count.js')
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
routes.get('/transaction/all', getTransactions);
routes.get('/transaction/payd', getTransactionPayd);
routes.get('/transaction/pendent', getTransactionPendent);
routes.get('/transaction/:id', getATransaction);
routes.put('/transaction/:id', updateTransaction);
routes.delete('/transaction/:id', deleteTransaction);




module.exports = routes;