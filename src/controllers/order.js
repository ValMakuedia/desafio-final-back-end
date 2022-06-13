const knex = require('../database/conexao');

const orderClientDesc = async (req, res) => {
    const { name } = req.body
    try {
        const client = knex('client').orderBy({ name }, 'desc')
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).json(error.message);
    }
};
const orderClientAsc = async (req, res) => {
    const { name } = req.body
    try {
        const client = knex('client').orderBy({ name }, 'asc')
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const orderTransaction = async (req, res) => {
    const { id, client_id } = req.body
    try {
        if (id) {
            const transactions = await knex('transaction').orderBy({ id })
            return res.status(200).json(transactions)
        }
        if (client_id) {
            const transactions = await knex('transaction').orderBy({ client_id })
            return res.status(200).json(transactions)
        }

    } catch (error) {
        return res.status(400).json(error.message);
    }
}
module.exports = {
    orderClientAsc, orderClientDesc, orderTransaction
}