const knex = require('../database/conexao');
const securePassword = require('secure-password');
const pwd = securePassword();

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json("Campo obrigatório")
    }

    try {
        const hash = await  pwd.hash(Buffer.from(password)).toString("hex");
        const emailUser = await knex('users').where('email', email)

        if (emailUser > 0) {
            return res.status(400).json("Email já cadastrado");
        }

        const user = await knex('users').isert({ name, email, password: hash });
        if (user.length === 0) {
            return res.status(400).json("O usuário não foi cadastrado!");
        }

        return res.status(200).json("Usuario foi cadastrado com sucesso!")
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
        const emailUser = await knex('users').where('email', email)

        if (emailUser.length === 0) {
            return res.status(400).json("Email ou senha incorretos");
        }

        const user =  emailUser[0];

        const result = await pwd.verify(Buffer.from(password), Buffer.from(users.password, "hex"))

        switch (result) {
            case securePassword.INVALID_UNRECOGNIZED_HASH:
            case securePassword.INVALID:
                return res.status(400).json("Email ou senha incorretos");
            case securePassword.VALID:
                break;
            case securePassword.VALID_NEEDS_REHASH:
                try {
                    const hash = await pwd.hash(Buffer.from(password)).toString("hex");
                    const passwordUser = await knex('users').where('password', password)

                } catch {
                    
                }
                break
        }
        return res.json(user)
    } catch (error) {
       return res.status(400).json(error.message);
   }







    // const { loginAuthorization } = req.headers;

    // if (!loginAuthorization) {
    //     return res.status(401).json('Email ou senha incorreta')
    // }

    // try {6
    //     const token = loginAuthorization.replace
    // }catch (error) {

    // }
}

const updateUser = async (req, res) => {
    let { name, email, password, phone, cpf } = req.body;
    const { id } = req.user;

    if (!name || !email || !password) {
        return res.status(404).json("Campo obrigatório!")
    }

    try {
        if (email) {
            if (email !== req.user.email) {
                const emailUser = await knex('users').where('email', email).first();
                
                if (emailUser) {
                    return res.status(400).json('Email já existe')
                }
            }
        }
        if (password) {
            password = await  pwd.hash(Buffer.from(password)).toString("hex");
        }
        const update = await knex('users').update({name, email, password, phone, cpf}).where({id});
        if (!update) {
            return res.status(400).json('O usuario não foi atualizado');
        }

        return res.status(200).json('Usuario atualizado com sucesso.')
    }catch (error){
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerUser,
    loginUser,
    updateUser
}
