const knex = require('../database/conexao');


const countClientOnday = async (rec, res) => {
    try {
        const onday = await knex('client').where('onday', true).count()
        return res.status(200).json(onday)
    } catch (error) {
        return res.status(400).json(error.message);
    }

};
const countClientDefauter = async (rec, res) => {
    try {
        const defauter = await knex('client').where('onday', false).count()
        return res.status(200).json(defauter)
    } catch (error) {
        return res.status(400).json(error.message);
    }

};
const counTransactionPayd = async (rec, res) => {
    try {
        const payd = await knex('transaction').where('status', "payd").count()
        return res.status(200).json(payd)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const counTransactionPendent = async (rec, res) => {
    try {
        const pendent = await knex('transaction').where('status', "pendent").count()
        return res.status(200).json(pendent)
    } catch (error) {
        return res.status(400).json(error.message);
    }

};
const counTransactionOverdue = async (rec, res) => {
    try {
        const overdue = await knex('transaction').where('status', "overdue").count()
        return res.status(200).json(overdue)
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
module.exports = {
    counTransactionOverdue, counTransactionPayd, counTransactionPendent, countClientDefauter, countClientOnday
}