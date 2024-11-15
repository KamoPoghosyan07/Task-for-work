import Model from "../models/model.js"
import validators from "../validator.js";

export default class Service {
    static generatePLU () {
        let PLU = ""

        for (let i = 1; i <= 6; i++) {
            const randomNum = Math.round( Math.random() * 9 )
            PLU += randomNum
        }

        return Number(PLU)
    }


    static createProduct (product) {
        const PLU = Service.generatePLU()
        product.PLU = PLU
        product.created_at = new Date().toISOString()
        const { error } = validators.productsValidator.validate(product)

        if (!error) {
            return "403 Validation Error ..."
        }

        return Model.createProduct(product)
    }


    static getProduct (PLU) {
        return Model.getProduct(PLU)
    }


    static async createStock (stock) {
        stock.created_at = new Date().toISOString()
        const { error } = validators.stocksValidator.validate(stock)

        if (!error) {
            return "403 Validation Error ..."
        }

        return Model.createStock(stock)
    }


    static getStock (PLU) {
        return Model.getStock(PLU)
    }


    static async increaseStock (increaseStockData) {
        increaseStockData.updated_at = new Date().toISOString()
        const {error} = validators.stocksUpdateValidator.validate(increaseStockData)

        if (!error) {
            return "403 Validation Error ..."
        }

        return await Model.increaseStock(increaseStockData)
    }


    static async decreaseStock (decreaseStockData) {
        decreaseStockData.updated_at = new Date().toISOString()
        const {error} = validators.stocksUpdateValidator.validate(decreaseStockData)

        if (!error) {
            return "403 Validation Error ..."
        }

        return await Model.decreaseStock(decreaseStockData)
    }


    static getActions (PLU) {
        return Model.getActions(PLU)
    }
} 