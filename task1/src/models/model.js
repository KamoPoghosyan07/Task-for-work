import pg from "../configs/psql.config.js";

export default class Model {
    static async createAction (PLU, action) {
        await pg("actions").insert({
            PLU : PLU,
            action,
            date : new Date().toISOString()
        })
    }


    static async createProduct (product) {
            await pg("products").insert(product);
            await Model.createAction(product.PLU, `The Product ${product.product_name} is created.`)
            return "Product Successfully Inserted ..."
    }


    static async getProduct (PLU) {
        return await pg("products").select("*").where("PLU", "=", PLU)
    }


    static async createStock (stock) {
            await pg("stocks").insert(stock)
            await Model.createAction(stock.PLU, `The Stock of ${stock.PLU} is created.`)
            return "Stock Successfully Created ..."
    }


    static async getStock (PLU) {
        return await pg("stocks").select("*").where("PLU", "=", PLU)
    }


    static async increaseStock (increaseStockData) {
            let { PLU, quantity_on_shelf, quantity_of_order } = increaseStockData
            const oldData = await pg("stocks").select("*").where("PLU", "=", PLU)
            
            increaseStockData.quantity_on_shelf += oldData[0].quantity_on_shelf
            increaseStockData.quantity_of_order += oldData[0].quantity_of_order 

            await pg("stocks").update(increaseStockData).where("PLU", "=", PLU)
            await Model.createAction(PLU, `The stock of ${PLU} is increased.`)

            return "Stock was updated ..."
    }


    static async decreaseStock (decreaseStockData) {
        let { PLU, quantity_on_shelf, quantity_of_order } = decreaseStockData

        const oldData = await pg("stocks").select("*").where("PLU", "=", PLU)
        
        decreaseStockData.quantity_on_shelf = oldData[0].quantity_on_shelf - quantity_on_shelf
        decreaseStockData.quantity_of_order = oldData[0].quantity_of_order - quantity_of_order 

        if (quantity_on_shelf < 0 || quantity_of_order < 0) {
            return `You don't have enough stocks. Order Stocks: ${quantity_on_shelf}, Shelf Stocks: ${quantity_of_order}`
        }

        await pg("stocks").update(decreaseStockData).where("PLU", "=", PLU)
        await Model.createAction(PLU, `The stock of ${PLU} is increased.`)

        return "Stock was updated ..."
    }


    static async getActions (PLU) {
        return await pg("actions").select("*").where("PLU", "=", PLU)
    }
}