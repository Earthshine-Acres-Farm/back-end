const db= require('../../data/dbConfig')

function getUserById (userId) {
   return db("users").select('*').where('users.id',userId)
}

// function getOrderById (orderId) {
//     return db("orders").select('*').where('orders.id',orderId)
//  }

function addToOrders (order){
    
    return db("orders").insert({
        id: order.id, 
        products: JSON.stringify(order.products),
        buyerId: order.buyerId,
        // orderTotal: null, 
        // createdAt: Date.now(), 
        // updatedAt: Date.now(), 
        shipped: false})
    // .then(()=>{return db("orderItems").insert({productId: order.productId, orderId: order.id, quantity: order.quantity})})
    
};

// function addToOrderItems (order){
//     return db('orderItems').insert({productId: order.productId, orderId: order.id, quantity: order.quantity}).returning('id')
// }

module.exports={
    getUserById,
    // getOrderById,
    addToOrders
    // addToOrderItems
};