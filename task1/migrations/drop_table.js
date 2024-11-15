import pg from "../src/configs/psql.config.js";

async function dropTables () {
    await pg.schema
        .dropTableIfExists("actions")
        .dropTableIfExists("products")
        .dropTableIfExists("stocks");

    console.log(await "Tables Successfully Dropped ...");
}

dropTables()