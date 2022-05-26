
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json("Campo obrigatório")
    }

    try {
        const emailUser = await knex('users').where('email', email)

        if (emailUser > 0) {
            return res.status(400).json("Email já cadastrado");
        }
        const encryptedPassword = await bcrypt.hash(password, 8);

        const user = await knex('users').isert({ name, email, password: encryptedPassword });
        if (user.length === 0) {
            return res.status(400).json("O usuário não foi cadastrado!");
        }

        return res.status(200).json("Usuario foi cadastrado com sucesso!")
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const loginUser = async (req, res) => {

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
            password = await bcrypt.hash(password, 8)
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
