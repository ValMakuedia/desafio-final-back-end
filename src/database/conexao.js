const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-34-198-186-145.compute-1.amazonaws.com',
        user: 'uxvjtuityiisfg',
        password: '0945c036703605374fb619ff453e622021d77175dd6f237ea4151017a662fdfd',
        database: 'd8qn9kfssudebi',
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