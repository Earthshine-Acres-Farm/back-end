const db= require('../../data/dbConfig')

function getAnimals() {
    return db("animals").select('*')
}

function getGroundPepper() {
    return db("groundPepper").select('*')
}

function getHotSauce() {
    return db("hotSauce").select('*')
}

function getProduce() {
    return db("produce").select('*')
}

function getProducts() {
    return db("products").select('*')
}

function getSoap() {
    return db("soap").select('*')
}
//provides token
function getUser(email,password){
    return db("users").where('users.email',email).where('users.password',password)
}

function addUser(user){
    return db("users").insert(user).returning("id")
}

function forgotUserPassword(password,newpass){
    return db("users").where({password}).update(newpass)
}




module.exports={
    getAnimals,
    getGroundPepper,
    getHotSauce,
    getProduce,
    getProducts,
    getSoap,
    getUser,
    addUser,
    forgotUserPassword

}