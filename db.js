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

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer
}