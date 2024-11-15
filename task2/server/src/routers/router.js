import express from "express";

import Controller from "../controllers/controller.js";

const app = express.Router();

app.get("/users/solve_problems", Controller.solveProblems);

export default app;