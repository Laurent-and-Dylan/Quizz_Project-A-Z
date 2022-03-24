const router = require("express").Router();
const QuizzController = require("../controllers/quizz.controllers");

//~ Paramétrage des différentes routes liées au quizz, plus type de requête
router.get("/random", QuizzController.random);
router.get("/:id_quizz", QuizzController.getQuizz);
router.get("/category/:id_category", QuizzController.quizzOfCategory);
router.post("/create", QuizzController.createQuizz);

module.exports = router;
