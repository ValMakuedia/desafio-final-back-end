const knex = require('../database/conexao');

const getTransactions = async (req, res) => {

    try {
        const transaction = await knex('transaction');
        const { client_id } = transaction

        const client_name = await knex('client').where('id', client_id)
        return res.status(200).json(...transaction, client_name)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getTransactionPendent = async (req, res) => {

    try {
        const transaction = await knex('transaction').where('status', "pendente");
        const { client_id } = transaction

        const client_name = await knex('client').where('id', client_id).select('name')
        return res.status(200).json(...transaction, client_name)

    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getTransactionPayd = async (req, res) => {

    try {
        const transaction = await knex('transaction').where('status', "pago");
        const { client_id } = transaction

        const client_name = await knex('client').where('id', client_id).select('name')
        return res.status(200).json(...transaction, client_name)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getATransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await knex('transaction').where({ id })
        const { client_id } = transaction

        const client_name = await knex('client').where('id', client_id).select('name')
        return res.status(200).json(...transaction, client_name)
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
module.exports = {
    getTransactions, getTransactionPayd, getTransactionPendent, getATransaction
}