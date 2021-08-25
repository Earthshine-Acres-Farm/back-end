const express = require('express');
const router = express.Router();
const Checkout= require('./checkoutModel')


// router.get("/checkout/:id", async (req, res, next) => {
// 	try {
// 		const list = await Checkout.getUserById(req.params.id)
// 		if (!list) {
// 			return res.status(404).json({
// 				message: "user not found",
// 			})
// 		}

// 		res.json(user)
// 	} catch (err) {
// 		next(err)
// 	}
// })

router.post("/users/:id/orders", async (req, res, next) => {
	// guests need a temporary id
	try{
		const itemData = req.body;
		const user= await Checkout.getUserById(req.params.id)
		const order= await Checkout.addToOrders(itemData)
		if (user){
			console.log(order)
			res.status(201).json(order)
		}else {
			res.status(404).json({ message: 'Could not find user with given id.' })
	  }}
	  catch(err){next(err)
	}
	
	
	
  
    // Checkout.getOrderById(id)
    //   .then(order => {
    //     if (order) {
    //       return Checkout.addOrder(itemData, id);
    //     } else {
    //       res.status(404).json({ message: 'Could not find user with given id.' })
    //     }
    //   })
    //   .then(items => {
    //     res.status(201).json(items);
    //   })
    //   .catch(err => {
    //     res.status(500).json({ message: 'Failed to add order' });
    //     next(err)
    //   });
})

module.exports = router

