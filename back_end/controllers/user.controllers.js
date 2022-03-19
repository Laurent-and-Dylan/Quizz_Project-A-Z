const User = require("../models/user.model");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "24h" });
};

module.exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  // const pseudo = req.body.pseudo
  // const email = req.body.email
  // const password = req.body.password

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

module.exports.logIn = async (req, res) => {
  const { pseudo, password } = req.body;

  const user = await User.findOne({
    where: { [Op.or]: { username: pseudo, email: pseudo } },
  });

  if (user && user.validPassword(password, user.password)) {
    const token = createToken(user.id_user);

    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ id: user.id_user });
  } else res.status(400).send(false);
};

module.exports.logOut = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.redirect("/");
};
