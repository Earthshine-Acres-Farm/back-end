const express = require('express');
const router = express.Router();
const Admin= require('./adminModel')
//research away to do multiple endpoints in one get as a variable
router.get("/animals", async (req, res, next) => {
	try {
        console.log(await Admin.getAnimals())
		res.json(await Admin.getAnimals())
	} catch(err) {
		next(err)
	}
})

router.get("/animals/:id", async (req, res, next) => {
	try {
        // console.log(await Admin.getAnimalById(req.params.id))
		const animal = await Admin.getAnimalById(req.params.id)
		if (!animal) {
			return res.status(404).json({
				message: "animal not found",
			})
		}

		res.json(animal)
	} catch (err) {
		next(err)
	}
})

router.post("/animals", async (req, res, next) => {
	try {
        const {item, category,description}=req.body
		const animal = await Admin.addAnimal({item, category,description})
		res.status(201).json(animal)
	} catch (err) {
		next(err)
	}
})

router.put('/animals/:id', async (req,res,next)=>{
    try{

        const editAnimal=await Admin.updateAnimal(req.params.id,req.body)
        res.json(editAnimal)
    }catch(err){
        next(err)
    }
})

router.delete('/animals/:id', async (req,res,next)=>{
    try{    
         await Admin.removeAnimal(req.params.id)
            res.status(200).json({message: "animal has been removed from inventory."})
    }catch(err){next(err)}
})

router.get("/peppers", async (req, res, next) => {
	try {
        console.log(await Admin.getGroundPepper())
		res.json(await Admin.getGroundPepper())
	} catch(err) {
		next(err)
	}
})

router.get("/peppers/:id", async (req, res, next) => {
	try {
        // console.log(await Admin.getGroundPepperById(req.params.id))
		const pepper = await Admin.getGroundPepperById(req.params.id)
		if (!pepper) {
			return res.status(404).json({
				message: "ground pepper not found",
			})
		}

		res.json(pepper)
	} catch (err) {
		next(err)
	}
})

router.post("/peppers", async (req, res, next) => {
	try {
        const {item, category,description}=req.body
		const pepper = await Admin.addGroundPepper({item, category,description})
		res.status(201).json(pepper)
	} catch (err) {
		next(err)
	}
})

router.put('/peppers/:id', async (req,res,next)=>{
    try{

        const editPepper=await Admin.updateGroundPepper(req.params.id,req.body)
        res.json(editPepper)
    }catch(err){
        next(err)
    }
})

router.delete('/peppers/:id', async (req,res,next)=>{
    try{    
         await Admin.removeGroundPepper(req.params.id)
            res.status(200).json({message: "pepper has been removed from inventory."})
    }catch(err){next(err)}
})

router.get("/sauces", async (req, res, next) => {
	try {
        // console.log(await Admin.getHotSauce())
		res.json(await Admin.getHotSauce())
	} catch(err) {
		next(err)
	}
})

router.get("/sauces/:id", async (req, res, next) => {
	try {
        // console.log(await Admin.getAnimalById(req.params.id))
		const sauce = await Admin.getHotSauceById(req.params.id)
		if (!sauce) {
			return res.status(404).json({
				message: "sauce not found",
			})
		}

		res.json(sauce)
	} catch (err) {
		next(err)
	}
})

router.post("/sauces", async (req, res, next) => {
	try {
        const {item, category,description}=req.body
		const sauce = await Admin.addHotSauce({item, category,description})
		res.status(201).json(sauce)
	} catch (err) {
		next(err)
	}
})

router.put('/sauces/:id', async (req,res,next)=>{
    try{

        const editSauce=await Admin.updateHotSauce(req.params.id,req.body)
        res.json(editSauce)
    }catch(err){
        next(err)
    }
})

router.delete('/sauces/:id', async (req,res,next)=>{
    try{    
         await Admin.removeHotSauce(req.params.id)
            res.status(200).json({message: "sauce has been removed from inventory."})
    }catch(err){next(err)}
})

router.get("/orders", async (req, res, next) => {
	try {
        // console.log(await Admin.getOrders())
		res.json(await Admin.getOrders())
	} catch(err) {
		next(err)
	}
})

router.get("/orders/:id", async (req, res, next) => {
	try {
        // console.log(await Admin.getorderById(req.params.id))
		const order = await Admin.getOrderById(req.params.id)
		if (!order) {
			return res.status(404).json({
				message: "order not found",
			})
		}

		res.json(order)
	} catch (err) {
		next(err)
	}
})

// router.post("/orders", async (req, res, next) => {
// 	try {
//         const {item, category,description}=req.body
// 		const order = await Admin.addOrder({item, category,description})
// 		res.status(201).json(order)
// 	} catch (err) {
// 		next(err)
// 	}
// })

// router.put('/orders/:id', async (req,res,next)=>{
//     try{
//         const editOrder=await Admin.updateOrder(req.params.id,req.body)
//         res.json(editOrder)
//     }catch(err){
//         next(err)
//     }
// })

// router.delete('/orders/:id', async (req,res,next)=>{
//     try{    
//          await Admin.removeOrder(req.params.id)
//             res.status(200).json({message: "order has been removed from inventory."})
//     }catch(err){next(err)}
// })

router.get("/produce", async (req, res, next) => {
	try {
        // console.log(await Admin.getproduce())
		res.json(await Admin.getProduce())
	} catch(err) {
		next(err)
	}
})

router.get("/produce/:id", async (req, res, next) => {
	try {
        // console.log(await Admin.getAnimalById(req.params.id))
		const produce = await Admin.getProduceById(req.params.id)
		if (!produce) {
			return res.status(404).json({
				message: "produce not found",
			})
		}

		res.json(produce)
	} catch (err) {
		next(err)
	}
})

router.post("/produce", async (req, res, next) => {
	try {
        const {item, category,description}=req.body
		const produce = await Admin.addProduce({item, category,description})
		res.status(201).json(produce)
	} catch (err) {
		next(err)
	}
})

router.put('/produce/:id', async (req,res,next)=>{
    try{

        const editProduce=await Admin.updateProduce(req.params.id,req.body)
        res.json(editProduce)
    }catch(err){
        next(err)
    }
})

router.delete('/produce/:id', async (req,res,next)=>{
    try{    
         await Admin.removeProduce(req.params.id)
            res.status(200).json({message: "produce has been removed from inventory."})
    }catch(err){next(err)}
})

router.get("/products", async (req, res, next) => {
	try {
        // console.log(await Admin.getproducts())
		res.json(await Admin.getProducts())
	} catch(err) {
		next(err)
	}
})

router.get("/products/:id", async (req, res, next) => {
	try {
        // console.log(await Admin.getAnimalById(req.params.id))
		const product = await Admin.getProductById(req.params.id)
		if (!product) {
			return res.status(404).json({
				message: "product not found",
			})
		}

		res.json(product)
	} catch (err) {
		next(err)
	}
})

router.post("/products", async (req, res, next) => {
	try {
        const {item, category,description}=req.body
		const product = await Admin.addProduct({item, category,description})
		res.status(201).json(product)
	} catch (err) {
		next(err)
	}
})

router.put('/products/:id', async (req,res,next)=>{
    try{

        const editProduct=await Admin.updateProduct(req.params.id,req.body)
        res.json(editProduct)
    }catch(err){
        next(err)
    }
})

router.delete('/products/:id', async (req,res,next)=>{
    try{    
         await Admin.removeProduct(req.params.id)
            res.status(200).json({message: "product has been removed from inventory."})
    }catch(err){next(err)}
})

router.get("/soaps", async (req, res, next) => {
	try {
        console.log(await Admin.getSoap())
		res.json(await Admin.getSoap())
	} catch(err) {
		next(err)
	}
})

router.get("/soaps/:id", async (req, res, next) => {
	try {
        // console.log(await Admin.getAnimalById(req.params.id))
		const soap = await Admin.getSoapById(req.params.id)
		if (!soap) {
			return res.status(404).json({
				message: "soap not found",
			})
		}

		res.json(soap)
	} catch (err) {
		next(err)
	}
})

router.post("/soaps", async (req, res, next) => {
	try {
        const {item, category,description}=req.body
		const soap = await Admin.addSoap({item, category,description})
		res.status(201).json(soap)
	} catch (err) {
		next(err)
	}
})

router.put('/soaps/:id', async (req,res,next)=>{
    try{

        const editSoap=await Admin.updateSoap(req.params.id,req.body)
        res.json(editSoap)
    }catch(err){
        next(err)
    }
})

router.delete('/soaps/:id', async (req,res,next)=>{
    try{    
         await Admin.removeSoap(req.params.id)
            res.status(200).json({message: "soap has been removed from inventory."})
    }catch(err){next(err)}
})
module.exports = router