import pg from "../src/configs/psql.config.js";

async function createTables () {
    await pg.schema.createTable("stocks", (table) => {
        table.increments("id").primary();
        table.integer("PLU").unique().notNullable();
        table.foreign("PLU").references("PLU").inTable("stocks");
        table.integer("quantity_on_shelf").notNullable();
        table.integer("quantity_of_order").notNullable();
        table.string("shop_name").notNullable();
        table.timestamp("created_at").notNullable();
        table.timestamp("updated_at");
    })
    .createTable("products", (table) => {
        table.increments("id").primary();
        table.integer("PLU").notNullable().unique()
        table.string("product_name").notNullable();
        table.timestamp("created_at").notNullable();
    })
    .createTable("actions", (table) => {
        table.increments("id").primary();
        table.integer("PLU").notNullable();
        table.foreign("PLU").references("PLU").inTable("products");
        table.string("action").notNullable();
        table.timestamp("date").notNullable();
    })

    console.log(await "Tables Successfully Created ...");
} 

createTables()