const express = require('express');
const router = express.Router();
const Main= require('./mainModel')

router.get("/animals", async (req, res, next) => {
	try {
		res.json(await Main.getAnimals())
	} catch(err) {
		next(err)
	}
})

module.exports = router