const db= require('../../data/dbConfig')

function getUserById (userId) {
    return db("users").where('users.id',userId).select('*')
}

// function addOrder(order) {
//     return db("orders").insert(order).returning('id');
// }; 

const getUserOrders = async (userId) =>{
    let orderData = {
        id: '',
        products: [],
        orderTotal: ''
    };
    await db ("orders as o")
    .select('o.id','o.products','o.orderTotal',)
    .where('o.buyerId',userId)
    .first()
    .then((ord)=>{
        orderData = {
            id: ord.id,
            products: ord.products,
            orderTotal: ord.orderTotal
        }
        console.log(orderData)
}
)
return orderData
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