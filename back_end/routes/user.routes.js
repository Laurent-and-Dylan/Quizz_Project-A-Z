const router = require("express").Router();
const UserControllers = require("../controllers/user.controllers");

//~ Paramétrage des différentes routes liées au utilisateurs, plus type de requête
router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);
router.post("/delete", UserControllers.delete);
router.get("/logout", UserControllers.logout);

module.exports = router;
