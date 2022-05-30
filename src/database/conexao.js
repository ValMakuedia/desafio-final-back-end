const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-54-211-255-161.compute-1.amazonaws.com',
        user: 'kiqncuapexzqle',
        password: 'f1729c0c75d3a21171495d80384dc13de819bc46d108b2207fdb9db967ce46b7',
        database: 'dmkbktnntfekl',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = knex;


//URI
//postgres://kiqncuapexzqle:f1729c0c75d3a21171495d80384dc13de819bc46d108b2207fdb9db967ce46b7@ec2-54-211-255-161.compute-1.amazonaws.com:5432/dmkbktnntfekl
//Heroku CLI
//heroku pg:psql postgresql - aerodynamic - 76426 --app api - desafio5