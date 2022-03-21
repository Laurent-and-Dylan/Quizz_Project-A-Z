const router = require("express").Router();
const QuizzController = require("../controllers/quizz.controllers");

router.get("/random", QuizzController.random);
router.get("/category/:id_category", QuizzController.quizzOfCategory);
router.get("/:id_quizz", QuizzController.getQuizz);

module.exports = router;
