import knex from "knex";
import { config } from "dotenv";
config()

export default knex({
    client : "pg",
    connection : {
        port : process.env.PSQL_PORT,
        host : process.env.PSQL_HOST,
        password : process.env.PSQL_PASSWORD,
        user : process.env.PSQL_USER,
        database : process.env.PSQL_DATABASE 
    }
});