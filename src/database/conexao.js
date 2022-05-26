const { Pool } = require('pg/lib')

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'familialima',
        database: 'api-desafio'
    
    }
})

const query = (text, param) => {
    return pool.query(text,param)
}

module.exports = knex;