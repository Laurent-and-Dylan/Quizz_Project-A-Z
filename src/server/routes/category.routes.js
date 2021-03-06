const router = require("express").Router();
const CategoryController = require("../controllers/category.controllers");

//~ Paramétrage des différentes routes liées au quizz, plus type de requête
router.post("/create", CategoryController.createOne);
router.get("/getAll", CategoryController.getAll);

module.exports = router;
