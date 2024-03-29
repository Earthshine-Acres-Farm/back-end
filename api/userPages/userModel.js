const db= require('../../data/dbConfig');

function getUserById (userId) {
    return db("users").where('users.id',userId).select("id",
    "firstName",
    "lastName",
    "email",
    "address")
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
    let allOrders= []
    await db ("orders as o")
    .select('o.id','o.products','o.orderTotal',)
    .where('o.buyerId',userId)
    .then((ord)=>{
        ord.forEach(o=>{
            orderData={
                id: o.id,
                products: o.products,
                orderTotal: o.orderTotal
            }
            allOrders.push(orderData)
        })
        // orderData = {
        //     id: ord.id,
        //     products: ord.products,
        //     orderTotal: ord.orderTotal
        // }
        // allOrders.push(ord)
        console.log(allOrders)
}
)
return allOrders
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