const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'familialima',
        database: 'api-desafio'
    
    }
})



module.exports = knex;