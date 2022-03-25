const router = require("express").Router();
const QuizzController = require("../controllers/quizz.controllers");

//~ Paramétrage des différentes routes liées au quizz, plus type de requête
router.get("/random", QuizzController.random);
router.get("/:id_quizz", QuizzController.getQuizz);
router.get("/category/:id_category", QuizzController.quizzOfCategory);
router.post("/create", QuizzController.createQuizz);
router.delete("/delete/:id_quizz", QuizzController.deleteQuizz);
router.put("/edit/:id_quizz", QuizzController.editQuizz);
router.get("/user/:id_user", QuizzController.getAllQuizzByUser);

module.exports = router;
