require("dotenv").config();

const express = require("express");
const app = express();

const db = require("./db.js");

app.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.json(db.selectCustomer(id));
})

app.get("/customers", (req, res) => {
    res.json(db.selectCustomers());
})

app.get("/", (req, res) => {
    res.json({
        message: "hello world, Brasil"
    })
})

app.listen(process.env.PORT, () => {
    console.log("Servidor está Funcionando Corretamente!")
})