import pg from "../configs/psql.config.js";

export default class Model {
    static async solveProblems () {
        const usersProblemsCount = await pg("users").select("problems").count("problems").groupBy("problems")
        await pg("users").update({ problems : false }).where("problems", "=", false)
        return `We solved the problems of over then ${usersProblemsCount[0].count} users.`
    }
};