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

app.post("/customers", async (req, res) => {
    const post_customer = req.body;
     await db.insertCustomer(post_customer);
    res.sendStatus(201);
});

app.get("/customers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await db.selectCustomer(id);
    res.json(results);
});


app.get("/customers", async (req, res) => {
    const results = await db.selectCustomers();
    res.json(results);
});

app.get("/", (req, res) => {
    res.json({
        message: "Server running on Port:" + ' ' + `${PORTA_SERVER}`
    });
});

app.listen(`${PORTA_SERVER}`, () => {
    console.log("Server running!")
});