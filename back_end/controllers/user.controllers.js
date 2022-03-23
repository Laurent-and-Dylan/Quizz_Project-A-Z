const User = require("../models/user.model");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

// * @desc Création d'un utilisateur
// * @route POST /api/user/register

module.exports.register = async (req, res) => {
  //^ const pseudo = req.body.pseudo
  //^ const email = req.body.email
  //^ const password = req.body.password
  const { username, email, password } = req.body;

  //~ Requête pour récuperer les infos d'un utilisateur
  const user = await User.findOne({ where: { [Op.or]: { username, email } } });

  console.log(user);
  //~ Structure de contrôle pour vérifier si le pseudo ou l'email n'est pas déjà existant
  if (user) {
    if (user.dataValues.username === username)
      return res.status(400).send(`${username} 'already exist !'`);
    if (user.dataValues.email === email)
      return res.status(400).send(`${email} 'already exist !'`);
  }

  //~ Requête de création d'un utilisateur
  User.create({ username, email, password });
  res.status(201).send("You are now registered !");
};

// * @desc Connexion d'un utilisateur
// * @route POST /api/user/login

module.exports.login = async (req, res) => {
  const { pseudo, password } = req.body;

  //~ Requête pour récuperer les infos d'un utilisateur si l'email ou l'username correspondent
  const user = await User.findOne({
    where: { [Op.or]: { username: pseudo, email: pseudo } },
  });

  //~ Vérification de la coherence des passwords et création d'un token web sous format JSON placé dans un cookie
  if (user.validPassword(password, user.dataValues.password)) {
    const maxAge = 3 * 60 * 60 * 24 * 1000;
    const id = user.dataValues.id_user;
    const token = jwt.sign({ id }, process.env.SECRET_TOKEN, {
      expiresIn: maxAge,
    });

    res.cookie("jwt", token, { httpOnly: true, maxAge });
    return res.status(200).send({ connexion: true });
  } else return res.status(400).send({ connexion: false });
};

// * @desc Déconnexion d'un utilisateur
// * @route GET /api/user/logout

module.exports.logout = (req, res) => {
  //~ Retrait du cookie JWT, des infos locals utilisateur et redirection sur la page d'accueil
  res.cookie("jwt", "", { maxAge: 0 });
  res.locals.user = null;
  res.redirect("/");
};
