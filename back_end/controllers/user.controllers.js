const User = require('../models/user.model');
const {Op} = require('sequelize')

module.exports.register = async(req, res) => {
    const {username, email, password} = req.body;
    // const pseudo = req.body.pseudo
    // const email = req.body.email
    // const password = req.body.password
    const user = await User.findOne({where:{[Op.or]:{username, email}}});
    if(user){
        if(user.dataValues.username === username) return res.status(400).send(`${username} 'already exist !'`);
        if(user.dataValues.email === email) return res.status(400).send(`${email} 'already exist !'`);
    }
   User.create({username, email, password})
    res.status(201).send('You are now registered !');
};
