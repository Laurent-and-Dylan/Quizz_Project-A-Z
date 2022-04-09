const router = require("express").Router();
const UserControllers = require("../controllers/user.controllers");
const { upload } = require("../middlewares/upload.middleware.js");

//~ Paramétrage des différentes routes liées au utilisateurs, plus type de requête
router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);
router.post("/delete", UserControllers.deleted);
router.get("/logout", UserControllers.logout);
router.post("/authentifier", UserControllers.alreadyLog);
router.post("/getuser", UserControllers.getUser);
router.post("/update", upload, UserControllers.updateProfile);

module.exports = router;
