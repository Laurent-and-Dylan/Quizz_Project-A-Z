const router = require("express").Router();
const UserControllers = require("../controllers/user.controllers");

//~ Paramétrage des différentes routes liées au utilisateurs, plus type de requête
router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);
router.post("/delete", UserControllers.deleted);
router.get("/logout", UserControllers.logout);
router.put("/update", UserControllers.updateProfile);
router.post("/authentifier", UserControllers.alreadyLog);

module.exports = router;
