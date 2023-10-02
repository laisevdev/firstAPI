const mysql = require("mysql2/promise");


const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectCustomers(){
    const allCustomers = await client.query("SELECT * FROM customersapi;");
    return allCustomers[0];
};

async function selectCustomer(id){
    const id_customer = await client.query("SELECT * FROM customersapi WHERE id=?;", [id]);
    return id_customer[0];
};

async function insertCustomer(customer){
    const values = [customer.nome, customer.idade, customer.uf, customer.email]
    const insert_customer = await client.query("INSERT INTO customersapi (nome, idade, uf, email) VALUES (?, ?, ?, ?)", values);
};

function updateCustomer (id, customerData){
    const customer = customers.find(c => c.id === id);
    if (!customer) return;
    customer.nome = customerData.nome;
    customer.idade = customerData.idade;
    customer.uf = customerData.uf;
};

function deleteCustomer(id) {
    const index = customers.findIndex(c => c.id === id);
    customers.splice(index, 1);
}



module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}