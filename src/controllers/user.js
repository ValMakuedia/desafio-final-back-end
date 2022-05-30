const knex = require('../database/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const segredo = require('../segredo');



const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json("Campo obrigatório")
    }

    try {
        const emailUser = await knex('users').where('email', email)

        if (emailUser.length !== 0) {
            return res.status(400).json("Email já cadastrado!");
        }
        const hash = await bcrypt.hash(password, 8);

        const user = await knex('users').insert({ name, email, password: hash });
        if (user.length === 0) {
            return res.status(400).json("Usuário cadastrado!");
        }

        return res.status(200).json("Usuário cadastrado com sucesso!")
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("Campo obrigatório!")
    }

    try {
        const user = await knex('users').where('email', email)

        if (user === 0) {
            return res.status(400).json("Email ou senha incorretas!");
        }
        const { password: passwordF, id: idF, email: emailF } = user[0]

        const verifiedPassword = await bcrypt.compare(password, passwordF)
        if (!verifiedPassword) {
            return res.status(400).json("Email ou senha incorretas!");
        }
        const token = jwt.sign({ id: idF }, segredo)

        return res.status(200).json({
            "id": idF,
            "email": emailF,
            "token": token
        })
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

const updateUser = async (req, res) => {
    let { name, email, password, phone, cpf } = req.body;
    const { id } = req.usuario;


    if (!name || !email || !password) {
        return res.status(404).json("Campo obrigatório!")
    }

    try {
        if (email) {
            if (email !== req.body.email) {
                const emailUser = await knex('users').where('email', email).first();

                if (emailUser) {
                    return res.status(400).json('Email já existe!')
                }
            }
        }

        const hash = await bcrypt.hash(password, 8);

        const update = await knex('users').where('id', id).update({ name, email, password: hash, phone, cpf });
        if (!update) {
            return res.status(400).json('Usuário não pode ser atualizado!');
        }

        return res.status(200).json('Usuário atualizado com sucesso!')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerUser,
    loginUser,
    updateUser
}
