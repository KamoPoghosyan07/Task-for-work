import Service from "../services/service.js";

export default class Controller {
    static async solveProblems (req, res, next) {
        try {
            const result = await Service.solveProblems() 
            res.send(result)
        } catch (error) {
            next(error)
        }
    }
}