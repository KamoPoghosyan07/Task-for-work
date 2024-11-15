import Service from "../services/service.js";

export default class Controller {
    static async createProduct (req, res, next) {
        try {
            const product = req.body;
            const result = await Service.createProduct(product);
            res.send(result);
        } catch (error) {
            next(error)
        }
    }


    static async getProduct (req, res, next) {
        try {   
            const { PLU } = req.query 
            console.log(PLU);
            
            const result = await Service.getProduct(PLU)
            res.json(result[0])
        } catch (error) {
            next(error)
        }
    }


    static async createStock (req, res, next) {
        try {
            const stock = req.body
            const result = await Service.createStock(stock) 
            res.send(result);
        } catch (error) {
            next(error)
        }
    }


    static async getStock (req, res, next) {
        try {   
            const { PLU } = req.query 
            const result = await Service.getStock(PLU)
            res.json(result[0])
        } catch (error) {
            next(error)
        }
    }


    static async increaseStock (req, res, next) {
        try {
            const increaseStockData = req.body
            const result = await Service.increaseStock(increaseStockData)
            res.send(result)
        } catch (error) {
            next(error);
        }
    }


    static async decreaseStock (req, res, next) {
        try {
            const decreaseStockData = req.body
            const result = await Service.decreaseStock(decreaseStockData)
            res.send(result)
        } catch (error) {
            next(error);
        }
    }


    static async getActions (req, res, next) {
        try {
            const { PLU } = req.query
            const results = await Service.getActions(PLU)
            res.send(results)
        } catch (error) {
            next(error)
        }
    }
}
