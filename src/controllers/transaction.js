const knex = require('../database/conexao')

const registerTransaction = async (req, res) => {
    const { client, description, status, amount, expiration } = req.body;

    if (!client || !description || !status || !amount || !expiration) {
        return res.status(400).json("Campo obrigatório!")
    }

    try {
        const client_id = client
        const transaction = await knex('transaction').insert({ client_id, description, status, amount, expiration });

        if (transaction.rowcount === 0) {
            return res.status(400).json("Não foi possivel cadastrar!")
        }

        return res.status(200).json("transação cadastrada com sucesso!")

    } catch (error) {
        return res.status(400).json(error.message);
    }


};
const getTransaction = async (req, res) => {

    try {
        const transaction = await knex('transaction');
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getTransactionPendent = async (req, res) => {

    try {
        const transaction = await knex('transaction').where('status', "pendente");
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getTransactionPayd = async (req, res) => {

    try {
        const transaction = await knex('transaction').where('status', "pago");
        return res.status(200).json(transaction)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

const updateCharge = async (req, res) => {
    let { id, description, status, amount, expiration } = req.body;

    if (!description || !status || !amount || !expiration) {
        return res.status(404).json("Campo obrigatório!")
    }

    try {

        await knex('transaction').where('id', id).update({ description, status, amount, expiration });

        return res.status(200).json('Cobrança editada com sucesso!')

    } catch (error) {
        return res.status(400).json(error.message);
    }


}

const deleteCharge = async (req, res) => {
    const {id} = req.params;
    const dataAtual = new Date();

    try {
        const idClient = await knex('transaction').where('client_id', id).first();

        if (idClient.status != "pendente"){
            return res.status(404).json("Status incompatível para exclusão");
        }

        if (idClient.expiration < dataAtual) {
            return res.status(404).json("Data incompatível para exclusão");
        }
        
        const delCharge = await knex('transaction').delete().where({id});

        return res.status(200).json("Deletado");

    }catch (error){
        console.log(error)
    }
}
module.exports = {
    registerTransaction, getTransaction, getTransactionPayd, getTransactionPendent, updateCharge, deleteCharge
};