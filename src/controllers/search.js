const knex = require('../database/conexao');

const searchTransactions = async (req, res) => {
    const { id, client_id } = req.body;
    try {
        if (id) {
            const transactions = await knex('transaction').where({ id })
            const { client_id } = transactions

            const client_name = await knex('client').where('id', client_id).select('name')
            return res.status(200).json(...transactions, client_name)
        }
        if (client_id) {
            const transactions = await knex('transaction').where({ client_id })
            const { client_id } = transactions

            const client_name = await knex('client').where('id', client_id).select('name')
            return res.status(200).json(...transactions, client_name)
        }

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const searchClients = async (req, res) => {
    const { name, cpf, email } = req.body;
    try {
        if (name) {
            const clients = await knex('client').where({ name })
            return res.status(200).json(clients)
        }
        if (cpf) {
            const clients = await knex('client').where({ cpf })
            return res.status(200).json(clients)
        }
        if (email) {
            const clients = await knex('client').where({ email })
            return res.status(200).json(clients)
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
module.exports = {
    searchClients, searchTransactions
}