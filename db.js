const Pool = require('pg').Pool

const pool = new Pool(
    {
        user: "postgres",
        password: 'Pos!007tgres',
        host: "localhost",
        database: "node_postgres",
        port: 5432
    }
)



module.exports = pool