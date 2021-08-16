const express = require('express');
const router = express.Router();
const Main= require('./mainModel')

//signup
router.post("/users", async (req, res, next) => {
	try {
        const {firstName, lastName, email, password, address}=req.body
		const newUser = await Main.addUser({firstName, lastName, email, password, address})
        console.log(newUser)
		res.status(201).json(newUser)
	} catch (err) {
		next(err)
	}
})
//change password
router.put("/users/:id", async (req, res, next) => {
	try {
        const changePass=await Main.forgotUserPassword(req.params.id,req.body)
        res.json(changePass)
    }catch(err){
        next(err)
    }
	}
)
//get specific product type 
router.get("/products/:product", async (req, res, next) => {
	try {
        console.log(req.params)
		const products = await Main.getSpecificProducts(req.params.product)
		if (!products) {
			return res.status(404).json({
				message: "products not found",
			})
		}

		res.json(products)
	} catch (err) {
		next(err)
	}
})
router.get("/animals", async (req, res, next) => {
	try {
        // console.log(await Admin.getproducts())
		res.json(await Main.getAnimals())
	} catch(err) {
		next(err)
	}
})

//full list of products
router.get("/products", async (req, res, next) => {
	try {
        // console.log(await Admin.getproducts())
		res.json(await Main.getProducts())
	} catch(err) {
		next(err)
	}
})

module.exports = router