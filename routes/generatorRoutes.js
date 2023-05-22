const express = require("express");
const router = express.Router();
const generatorController = require("../controllers/generatorController")
const generateResults = require("../controllers/resultsController")

// When the app get a Post request this route is called line 7

router.post("/form", generatorController.generate_form);

router.post("/results", generateResults.generateResult);
module.exports = router;