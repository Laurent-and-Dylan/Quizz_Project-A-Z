const router = require("express").Router();

const UserControllers = require("../controllers/user.controllers");

router.post("/register", UserControllers.register);
router.post("/login", UserControllers.logIn);
router.get("/logout", UserControllers.logOut);

module.exports = router;
