import express from "express";

import Controller from "../controllers/controller.js";

const app = express.Router()

app.post("/product", Controller.createProduct);

app.get("/product", Controller.getProduct)

app.post("/stock", Controller.createStock);

app.get("/stock", Controller.getStock)

app.patch("/stock/increase", Controller.increaseStock)

app.patch("/stock/decrease", Controller.decreaseStock)

app.get("/actions", Controller.getActions)

export default app