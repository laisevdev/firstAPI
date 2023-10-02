require("dotenv").config();

const db = require("./db.js");

const express = require("express");
const app = express();

const PORTA_SERVER = process.env.PORT;

app.use(express.json());

app.delete("/customers/:id", (req, res) => {
    const idCustomer = parseInt(req.params.id);
    db.deleteCustomer(idCustomer);
    res.sendStatus(204);
});

app.patch("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const update_customer = req.body;
    db.updateCustomer(id, update_customer);
    res.sendStatus(200);
});

app.post("/customers", (req, res) => {
    const post_customer = req.body;
    db.insertCustomer(post_customer);
    res.sendStatus(201);
});

app.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(db.selectCustomer(id));
});


app.get("/customers", async (req, res) => {
    const results = await db.selectCustomers();
    res.json(results);
});

app.get("/", (req, res) => {
    res.json({
        message: "Servidor funcionando na Porta" + ' ' + `${PORTA_SERVER}`
    });
});

app.listen(`${PORTA_SERVER}`, () => {
    console.log("Servidor está Funcionando Corretamente!")
});