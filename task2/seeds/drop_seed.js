import pg from "../server/src/configs/psql.config.js";

async function truncateUsers () {
    await pg("users").truncate()

    console.log(await "Table is empty ...");
}

truncateUsers();