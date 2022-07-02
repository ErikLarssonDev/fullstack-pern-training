const Pool = require("pg").Pool
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool ({
    user: "postgres",
    password: process.env.POSTGRES_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "test1"
})

export default pool