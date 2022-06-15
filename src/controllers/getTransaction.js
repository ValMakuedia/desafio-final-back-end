const knex = require('../database/conexao');

const getTransactions = async (req, res) => {

    try {
        const transaction = await knex('transaction').join('client', 'client_id', '=', 'client.id');
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getTransactionPendent = async (req, res) => {

    try {
        const transaction = await knex('transaction').where('status', "pendente").join('client', 'client_id', '=', 'client.id');
        return res.status(200).json(transaction)


    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getTransactionPayd = async (req, res) => {

    try {
        const transaction = await knex('transaction').where('status', "pago").join('client', 'client_id', '=', 'client.id');
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getATransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await knex('transaction').where({ id }).join('client', 'client_id', '=', 'client.id');
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
module.exports = {
    getTransactions, getTransactionPayd, getTransactionPendent, getATransaction
}