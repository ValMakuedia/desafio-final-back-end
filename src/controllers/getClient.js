const knex = require('../database/conexao');

const getAClient = async (req, res) => {
    const { cpf } = req.body;
    try {
        const client = await knex('client').where({ cpf });
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getClients = async (req, res) => {

    try {
        const client = await knex('client');
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getClientsOnday = async (req, res) => {

    try {
        const client = await knex('client').where('onday', true);
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const getClientsDefauter = async (req, res) => {

    try {
        const client = await knex('client').where('onday', false);
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

module.exports = {
    getAClient, getClients, getClientsDefauter, getClientsOnday
}