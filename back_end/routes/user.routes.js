const router = require('express').Router();

const UserControllers = require('../controllers/user.controllers');

router.post('/register', UserControllers.register);


module.exports = router