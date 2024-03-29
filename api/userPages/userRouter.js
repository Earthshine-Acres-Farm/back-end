const express = require('express');
const router = express.Router();
const Users= require('./userModel')

router.get("/:id", async (req, res, next) => {
	try {
		const user = await Users.getUserById(req.params.id)
		if (!user) {
			return res.status(404).json({
				message: "user not found",
			})
		}

		res.json(user)
	} catch (err) {
		next(err)
	}
})

// router.post("/:id/orders", async (req, res, next) => {
// 	try {
//         const {orderId, productId, buyerId, price, quantity}=req.body
// 		const order = await User.addOrder({orderId, productId, buyerId, price, quantity})
// 		res.status(201).json(order)
// 	} catch (err) {
// 		next(err)
// 	}
// })

router.get("/:id/orders", async (req, res, next) => {
	try {
		const orders = await Users.getUserOrders(req.params.id)
        
		let allOrders= []
		orders.forEach(ord=>{
			let i= JSON.parse(ord.products)
			let prices= []
			i.map((p)=>{
				prices.push(p.price*p.quantity)	//problem
			})
			let tot= prices.reduce((a, b) => a + b, 0)
			allOrders.push({
				    id: ord.id,
				    products: i,
				    orderTotal: tot
				})	
		})
        // let i= JSON.parse(orders.products)
        // i.map((p)=>{
        //     prices.push(p.price*p.quantity)
            
        // })
        // let tot= prices.reduce((a, b) => a + b, 0)
		// let all= []
		if (!orders) {
			return res.status(404).json({
				message: "user orders not found",
			})
		}
		// all.push({
        //     id: orders.id,
        //     products: i,
        //     orderTotal: tot
        // })
		// res.json({
		// 	id: orders.id,
		// 	products: i,
		// 	orderTotal: tot
		// })
		res.json(allOrders)
	} catch (err) {
		next(err)
	}
})

router.put('/:id', async (req,res,next)=>{
    try{

        const editUser=await Users.updateUserData(req.params.id,req.body)
        res.json(editUser)
    }catch(err){
        next(err)
    }
})

router.delete('/:id', async (req,res,next)=>{
    try{    
         await Users.deleteAccount(req.params.id)
            res.status(200).json({message: "User has been deleted."})
    }catch(err){next(err)}
})

module.exports = router