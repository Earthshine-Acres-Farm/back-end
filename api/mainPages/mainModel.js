const db= require('../../data/dbConfig')

function getAnimals() {
    return db("animals").select('*')
}
//gets all products by type
function getSpecificProducts(products) {
    return db("products").where('productType', products).select('*')
}
//gets all pepper products when link is clicked
// function getGroundPepperProducts(pepper) {
//     return db("products").where('productType', pepper).select('*')
// }

// function getHotSauceProducts(sauce) {
//     return db("products").where('productType', sauce).select('*')
// }

// function getProduceProducts(produce) {
//     return db("products").where('productType',produce).select('*')
// }

//get all products
function getProducts() {
    return db("products").select('*')
}

// function getSoapProducts(soap) {
//     return db("products").where('productType',soap).select('*')
// }

//provides token
function findBy(email){
    return db("users").select('*').where('email', email).first()
}

function addUser(user){
    return db("users").insert(user).returning("id")
}

function forgotUserPassword(id,newpass){
    return db("users").where({id}).update(newpass)
}




module.exports={
    getAnimals,
    getSpecificProducts,
    // getGroundPepperProducts,
    // getHotSauceProducts,
    // getProduceProducts,
    getProducts,
    // getSoapProducts,
    findBy,
    addUser,
    forgotUserPassword

}