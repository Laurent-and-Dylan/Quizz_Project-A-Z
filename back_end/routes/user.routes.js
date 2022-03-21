const router = require("express").Router();

const UserControllers = require("../controllers/user.controllers");

router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);
router.get("/logout", UserControllers.logout);

module.exports = router;
