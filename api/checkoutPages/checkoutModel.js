const db= require('../../data/dbConfig')

const getUserById = async (userId)=> {
    await db("users").select('*').where('users.id',userId)
}

module.exports={
    getUserById,
};