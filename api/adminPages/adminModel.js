const db= require('../../data/dbConfig')

// gets list of animals from animals database
//make a custom hook
function getAnimals() {
    return db("animals").select('*')
};

function getAnimalById (id){
    return db("animals")
        .select('animal','description')
        .where({id})
        .first()
}

function addAnimal(animal) {
    return db('animals').insert(animal).returning('id');
};

//changes would be an object containing the name and description of the item in the table
function updateAnimal(id, changes) {
    return db('animals').where({ id }).update(changes);
};

function removeAnimal(id) {
    return db('animals').where({ id }).del();
};

function getGroundPepper() {
    return db("groundPepper").select('*')
};

function getGroundPepperById (id){
    return db("groundPepper")
        .select('groundPepper','description')
        .where({id})
        .first()
}

function addGroundPepper(pepper) {
    return db("groundPepper").insert(pepper).returning('id');
};

//changes would be an object containing the name and description of the item in the table
function updateGroundPepper(id, changes) {
    return db("groundPepper").where({ id }).update(changes);
};

function removeGroundPepper(id) {
    return db("groundPepper").where({ id }).del();
};

function getHotSauce() {
    return db("hotSauce").select('*')
};

function getHotSauceById (id){
    return db("hotSauce")
        .select('hotSauce','description')
        .where({id})
        .first()
}

function addHotSauce(sauce) {
    return db("hotSauce").insert(sauce).returning('id');
};

//changes would be an object containing the name and description of the item in the table
function updateHotSauce(id, changes) {
    return db("hotSauce").where({ id }).update(changes);
};

function removeHotSauce(id) {
    return db("hotSauce").where({ id }).del();
};

function getOrders() {
    return db("orders").select('*')
};

function getOrderById (id){
    return db("orders")
        .select('orderId','productId','buyerId','price','quantity')
        .where('orderId',id)
        .first()
}

function addOrder(order) {
    return db("orders").insert(order).returning('id');
};

//changes would be an object containing the name and description of the item in the table
function updateOrder(id, changes) {
    return db("orders").where({ id }).update(changes);
};

function removeOrder(id) {
    return db("orders").where({ id }).del();
};

function getProduce() {
    return db("produce").select('*')
};

function getProduceById (id){
    return db("produce")
        .select('produce','description')
        .where({id})
        .first()
}

function addProduce(produce) {
    return db("produce").insert(produce).returning('id');
};

//changes would be an object containing the name and description of the item in the table
function updateProduce(id, changes) {
    return db("produce").where({ id }).update(changes);
};

function removeProduce(id) {
    return db("produce").where({ id }).del();
};

function getProducts() {
    return db("products").select('*')
};

function getProductById (id){
    return db("products")
        .select('productName','price','amount','productType','description')
        .where({id})
        .first()
}

function addProduct(product) {
    return db("products").insert(product).returning('id');
};

//changes would be an object containing the name and description of the item in the table
function updateProduct(id, changes) {
    return db("products").where({ id }).update(changes);
};

function removeProduct(id) {
    return db("products").where({ id }).del();
};

function getSoap() {
    return db("soap").select('*')
};

function getSoapById (id){
    return db("soap")
        .select('Soap','description')
        .where({id})
        .first()
}

function addSoap(soap) {
    return db("soap").insert(soap).returning('id');
};

//changes would be an object containing the name and description of the item in the table
function updateSoap(id, changes) {
    return db("soap").where({ id }).update(changes);
};

function removeSoap(id) {
    return db("soap").where({ id }).del();
};

module.exports={
    getAnimals,
    getAnimalById,
    addAnimal,
    updateAnimal,
    removeAnimal,
    getGroundPepper,
    getGroundPepperById,
    addGroundPepper,
    updateGroundPepper,
    removeGroundPepper,
    getHotSauce,
    getHotSauceById,
    addHotSauce,
    updateHotSauce,
    removeHotSauce,
    getOrders,
    getOrderById,
    addOrder,
    updateOrder,
    removeOrder,
    getProduce,
    getProduceById,
    addProduce,
    updateProduce,
    removeProduce,
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    removeProduct,
    getSoap,
    getSoapById,
    addSoap,
    updateSoap,
    removeSoap,
    
};