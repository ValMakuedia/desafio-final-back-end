const knex = require('../database/conexao')

const registerClient = async (req, res) => {
    const { name, email, cpf, phone, cep, address, complement, district, city, state} = req.body;

    if (!name || !email || !cpf || !phone){
        return res.status(400).json("Campo obrigatório!")
    }

    try {
        const emailClient = await knex('client').where('email', email);
        
        if (emailClient > 0) {
            return res.status(400).json("Email já cadastrado!");
        }

        const client = await knex('client').insert({ name, email, cpf, phone, cep, address, complement, district, city, state});

        if (client.length === 0) {
            return res.status(400).json("Cliente já cadastrado!")
        }

        return res.status(200).json("Cliente cadastrado com sucesso!")

    }catch (error){
        return res.status(400).json(error.message);
    }


}

module.exports = {
    registerClient
}