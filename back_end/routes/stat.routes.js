const router = require("express").Router();
const Statcontroller = require("../controllers/stat.controllers.js");

//~ Paramétrage des différentes routes liées au statistiques, plus type de requête
router.get("/quizz/:id_quizz", Statcontroller.statOfQuizz);
router.get("/user/:id_user", Statcontroller.statOfUser);

module.exports = router;
