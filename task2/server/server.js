import express from "express";
import { config } from "dotenv";
config()

import app from "./src/routers/router.js"

const server = express()

server.use(express.json())
server.use(app)

const port = process.env.PORT

server.listen(port, () => {
    console.log("Server Successfully Run ...");
})