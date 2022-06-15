const knex = require('../database/conexao');

const getTransactions = async (req, res) => {

    try {
        const transaction = await knex('transaction');
        if (transaction) {
            let clientArray = [];
            for (let charge of transaction) {

                const { client_id } = charge
                const client_name = await knex('client').where('id', client_id).select('name');
                let transacao = client_name.concat(charge)

                clientArray.push(transacao)

            }

            console.log(clientArray)

            return res.status(200).json(clientArray)
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getTransactionPendent = async (req, res) => {

    try {
        const transaction = await knex('transaction').where('status', "pendente");
        if (transaction) {
            let clientArray = [];
            for (let charge of transaction) {

                const { client_id } = charge

                const client_name = await knex('client').where('id', client_id).select('name');

                let transacao = client_name.concat(charge)

                clientArray.push(transacao)

            }

            console.log(clientArray)

            return res.status(200).json(clientArray)
        }

    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getTransactionPayd = async (req, res) => {

    try {
        const transaction = await knex('transaction').where('status', "pago");
        if (transaction) {
            let clientArray = [];
            for (let charge of transaction) {

                const { client_id } = charge

                const client_name = await knex('client').where('id', client_id).select('name');

                let transacao = client_name.concat(charge)

                clientArray.push(transacao)

            }

            console.log(clientArray)

            return res.status(200).json(clientArray)
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getATransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await knex('transaction').where({ id })
        if (transaction) {
            let clientArray = [];
            for (let charge of transaction) {

                const { client_id } = charge

                const client_name = await knex('client').where('id', client_id).select('name');

                let transacao = client_name.concat(charge)

                clientArray.push(transacao)

            }

            console.log(clientArray)

            return res.status(200).json(clientArray)
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
module.exports = {
    getTransactions, getTransactionPayd, getTransactionPendent, getATransaction
}