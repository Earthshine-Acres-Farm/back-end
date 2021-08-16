const db= require('../../data/dbConfig')

function getUserById (userId) {
    return db("users").where('users.id',userId).select('*')
}

// function addOrder(order) {
//     return db("orders").insert(order).returning('id');
// }; 

function getUserOrders (userId) {
    return db ("orders as O")
    .join('products as P','O.productId','P.id')
    .select('P.productName','O.price','O.quantity')
    .where('O.buyerId',userId)
}

function deleteAccount (id) {
    return db('users').where({ id }).del();
  };

  async function updateUserData(id, data) {
	await db("users").where({ id }).update(data)
	return getUserById(id)
}



module.exports={
    getUserById,
    // addOrder,
    getUserOrders,
    deleteAccount,
    updateUserData
};