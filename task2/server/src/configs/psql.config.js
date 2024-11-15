import knex from "knex";
import { config } from "dotenv";
import path from "path";
config({ path : path.resolve("server/.env") });

export default knex({
    client : "pg",
    connection : {
        port : process.env.PSQL_PORT,
        host : process.env.PSQL_HOST,
        password : process.env.PSQL_PASSWORD,
        database : process.env.PSQL_DATABASE,
        user : process.env.PSQL_USER,
    }
});