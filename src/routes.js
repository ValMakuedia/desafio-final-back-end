const express = require('express');
const { registerUser, loginUser, updateUser } = require('./controllers/user');
const { registerClient, updateClient } = require('./controllers/client')
const { verifyLogin } = require('./middleware/verifyLogin.js')
const { registerTransaction, updateTransaction, deleteTransaction } = require('./controllers/transaction')
const { getTransactions, getTransactionPayd, getTransactionPendent, getATransaction } = require('./controllers/getTransaction')
const { getAClient, getClients, getClientsDefauter, getClientsOnday } = require('./controllers/getClient');
const { searchClients, searchTransactions } = require('./controllers/search')
const { counTransactionOverdue, counTransactionPayd, counTransactionPendent, countClientDefauter, countClientOnday } = require('./controllers/count')

const routes = express();

routes.get('/teste', (req, res) => {
    return res.status(200).send("ok")
})
routes.post('/user', registerUser);
routes.post('/login', loginUser);

routes.use(verifyLogin)

routes.put('/user', updateUser);

routes.post('/client', registerClient);
routes.put('/client', updateClient);
routes.get('/client', getAClient);
routes.get('/client/all', getClients);
routes.get('/client/defauter', getClientsDefauter);
routes.get('/client/onday', getClientsOnday);


routes.post('/transaction', registerTransaction);
routes.get('/transaction/all', getTransactions);
routes.get('/transaction/payd', getTransactionPayd);
routes.get('/transaction/pendent', getTransactionPendent);
routes.get('/transaction/:id', getATransaction);
routes.put('/transaction/:id', updateTransaction);
routes.delete('/transaction/:id', deleteTransaction);

routes.get('/search/client', searchClients);
routes.get('/search/transaction', searchTransactions);

routes.get('/count/client/onday', countClientOnday);
routes.get('/count/client/defauter', countClientDefauter);
routes.get('/count/transaction/payd', counTransactionPayd);
routes.get('/count/transaction/pendent', counTransactionPendent);
routes.get('/count/transaction/overdue', counTransactionOverdue);


module.exports = routes;