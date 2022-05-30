const knex = require('../database/conexao');
const jwt = require('jsonwebtoken');
const segredo = require('../segredo');


const verifyLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json('O usuário deve estar logado e possuir um token válido. Favor realizar login.');

    }

    try {
        const token = authorization.replace('Bearer ', '').trim();
        const seila = jwt.verify(token, segredo);
        return res.json(seila)
        const queryId = await knex('users').where('id', id)

        if (!queryId) {
            return res.status(400).json(" Usuario não encontrado ")
        }

        const { ...usuario } = queryId[0];
        req.usuario = usuario;

        next();

    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json('Para acessar este recurso o usuário deve estar logado e possuir um token válido. Favor realizar login.');
        }
        return res.status(400).json(error.message)
    }
}
module.exports = { verifyLogin };