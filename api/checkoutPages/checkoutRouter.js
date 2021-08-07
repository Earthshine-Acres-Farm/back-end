const express = require('express');
const router = express.Router();
const Checkout= require('./checkoutModel')


router.get("/checkout/:id", async (req, res, next) => {
	try {
		const user = await Checkout.getUserById(req.params.id)
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

module.exports = router

