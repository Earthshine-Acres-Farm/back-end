const db= require('../../data/dbConfig')

const getUserById = async (userId)=> {
    await db("users").select('*').where('users.id',userId)
}

const getUserOrders = async (userId)=>{
    await db ("orders").select('*').where('orders.buyerId',userId)
}

const deleteAccount = (id) => {
    return db('users').where({ id }).del();
  };

module.exports={
    getUserById,
    getUserOrders,
    deleteAccount
};