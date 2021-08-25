const db= require('../../data/dbConfig')

function getUserById (userId) {
   return db("users").select('*').where('users.id',userId)
}
 

function addToOrders (order){
    
    return db("orders").insert({
        id: order.id, 
        products: JSON.stringify(order.products),
        buyerId: order.buyerId,
        shipped: false})    
};


module.exports={
    getUserById,
    // getOrderById,
    addToOrders
    // addToOrderItems
};