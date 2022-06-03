const knex = require('../database/conexao')

const registerClient = async (req, res) => {
    const { name, email, cpf, phone, cep, address, complement, district, city, state } = req.body;

    if (!name || !email || !cpf || !phone) {
        return res.status(400).json("Campo obrigatório!")
    }

    try {
        const emailClient = await knex('client').where({ email }, { cpf });
        console.log(emailClient.length)
        if (emailClient.length !== 0) {
            return res.status(400).json("Email ou cpf já cadastrado!");
        }

        const client = await knex('client').insert({ name, email, cpf, phone, cep, address, complement, district, city, state });

        if (client.rowcount === 0) {
            return res.status(400).json("Não foi possivel cadastrar!")
        }

        return res.status(200).json("Cliente cadastrado com sucesso!")

    } catch (error) {
        return res.status(400).json(error.message);
    }


}
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
const updateClient = async (req, res) => {
    const { name, email, cpf, phone, cep, address, complement, district, city, state } = req.body;



    if (!name || !email || !cpf || !phone) {
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
        if (cpf) {
            if (cpf !== req.body.cpf) {
                const cpfClient = await knex('users').where('email', email).first();

                if (cpfClient) {
                    return res.status(400).json('O cpf já existe!')
                }
            }
        }



        const update = await knex('client').where({ cpf }).update({ name, email, cpf, phone, cep, address, complement, district, city, state });
        if (!update) {
            return res.status(400).json('Usuário não pode ser atualizado!');
        }

        return res.status(200).json('Usuário atualizado com sucesso!')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
module.exports = {
    registerClient, getAClient, getClients, updateClient
}