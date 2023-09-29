require("dotenv").config();

const db = require("./db.js");

const express = require("express");
const app = express();

app.use(express.json());

app.post("/customers", (req, res) => {
    const post_customer = req.body;
    db.insertCustomer(post_customer);
    res.sendStatus(201);
});

app.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(db.selectCustomer(id));
});

app.get("/customers", (req, res) => {
    res.json(db.selectCustomers());
});

app.get("/", (req, res) => {
    res.json({
        message: "hello world, Brasil"
    });
});

app.listen(process.env.PORT, () => {
    console.log("Servidor está Funcionando Corretamente!")
});