import pg from "../server/src/configs/psql.config.js";

async function createTables() {
    await pg.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("surname").notNullable();
        table.integer("age").notNullable();
        table.boolean("problems").notNullable();
    });

    console.log(await "Table Successfully Created ...");
}

createTables();