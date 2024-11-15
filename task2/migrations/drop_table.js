import pg from "../server/src/configs/configs.js";

async function dropTables () {
    await pg.schema.dropTableIfExist("users")

    console.log(await "Table Successfully Dropped ...");
}

dropTables();