const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");
router.get("/createRecipe", recipeController.create);

module.exports = router;