const User = require("../models/user.model");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  // const pseudo = req.body.pseudo
  // const email = req.body.email
  // const password = req.body.password
  const { username, email, password } = req.body;
  const user = await User.findOne({ where: { [Op.or]: { username, email } } });

  if (user) {
    if (user.dataValues.username === username)
      return res.status(400).send(`${username} 'already exist !'`);
    if (user.dataValues.email === email)
      return res.status(400).send(`${email} 'already exist !'`);
  }
  User.create({ username, email, password });
  res.status(201).send("You are now registered !");
};

module.exports.login = async (req, res) => {
  const { pseudo, password } = req.body;
  const user = await User.findOne({
    where: { [Op.or]: { username: pseudo, email: pseudo } },
  });

  if (user.validPassword(password, user.dataValues.password)) {
    const maxAge = 3 * 60 * 60 * 24 * 1000;
    const id = user.dataValues.id_user;
    const token = jwt.sign({ id }, process.env.SECRET_TOKEN, {
      expiresIn: maxAge,
    });

    res.cookie("jwt", token, { httpOnly: true, maxAge });
    return res.status(200).send(true);
  } else return res.status(400).send(false);
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.locals.user = null;
  res.redirect("/");
};
