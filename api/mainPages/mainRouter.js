const express = require('express');
const router = express.Router();
const Main= require('./mainModel')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

//signup
router.post("/users", async (req, res, next) => {
	try {
        const {firstName, lastName, email, password, address}=req.body
		const hpass= bcrypt.hashSync(password, 14)
		const newUser = await Main.addUser({firstName, lastName, email, password: hpass, address})
        console.log(newUser)
		res.status(201).json(newUser)
	} catch (err) {
		next(err)
	}
})

//login
router.post('/login', async (req, res, next) => {
    try {
          const { email, password } = req.body
          
		if (!email || !password) {
				return res.status(401).json({
					message: "email and password required",
				})
			}
        const user = await Main.findBy(email)
      	const passwordValid = await bcrypt.compareSync(password, user.password)
        if (!user.email || !passwordValid) {
            return res.status(401).json({
                message: "invalid credentials",
            })
      	}
        const token = jwt.sign({
            id: user.id,
        }, process.env.JWT_SECRET)
        res.cookie("token", token)
        res.json({
            message: `Welcome, ${user.email}!`,
        //   token: token
        })
    }catch(err) {
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