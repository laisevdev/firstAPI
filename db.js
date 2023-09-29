const customers = [{
    id: 1,
    nome: "Suzana",
    idade: 24,
    uf: "MT"
}];

function selectCustomers(){
    return customers;
};

function selectCustomer(id){
    return customers.find(c => c.id === id);
};

function insertCustomer(customer){
    customers.push(customer)
};

function updateCustomer (id, customerData){
    const customer = customers.find(c => c.id === id);
    if (!customer) return;
    customer.nome = customerData.nome;
    customer.idade = customerData.idade;
    customer.uf = customerData.uf;
}

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer
}