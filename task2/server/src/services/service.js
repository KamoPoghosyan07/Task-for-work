import Model from "../models/model.js";

export default class Service {
    static async solveProblems () {
        return await Model.solveProblems()
    }
}