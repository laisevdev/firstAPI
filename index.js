require("dotenv").config();

const express = require("express");
const app = express();

const db = require("./db.js");

app.get("/", (req, res) => {
    res.json({
        message: "hello world, Brasil"
    })
})

app.listen(process.env.PORT, () => {
    console.log("Servidor está Funcionando Corretamente!")
})