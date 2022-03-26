const User = require("../models/user.model");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { verifyAuth } = require("../middlewares/auth.middleware");
// * @desc Création d'un utilisateur
// * @route POST /api/user/register

module.exports.register = async (req, res) => {
  //^ const pseudo = req.body.pseudo
  //^ const email = req.body.email
  //^ const password = req.body.password
  const { username, email, password } = req.body;

  //~ Requête vérifier la présence d'un utilisateur dans la database ou création de celui-ci
  const user = await User.findOrCreate({
    where: { [Op.or]: { username, email } },
    defaults: { username, email, password },
    raw: true,
  });

  //~ Structure de contrôle pour vérifier si le pseudo ou l'email n'est pas déjà existant
  if (user) {
    if (user[0].username === username)
      return res.status(400).send(`${username} 'already exist !'`);
    if (user[0].email === email)
      return res.status(400).send(`${email} 'already exist !'`);
  }

  //~ Requête de création d'un utilisateur
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
    const { id_user, status } = user;
    const token = jwt.sign({ id_user, status }, process.env.SECRET_TOKEN, {
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

// * @desc Suppression d'un utilisateur
// * @route POST /api/user/delete

module.exports.delete = async (req, res) => {
  const { password, username } = req.body;

  //~ Vérification de la présence du token JWT et de sa validité
  const auth = verifyAuth(req);

  if (!auth) return res.status(400).send({ message: "Acces Denied !" });

  //~ Requête pour récupérer les infos de l'utilisateur
  const user = await User.findOne({
    where: { [Op.or]: { id_user: auth, username } },
  });

  //~ Suppression du compte si token et password valide ou si status admin

  if (user.validPassword(password, user.password) || auth === "admin") {
    // Suppresion compte, retrait cookie/token
    user.destroy();
    res.cookie("jwt", "", 0);
    res.status(200).send({ message: "User Delete" });
  } else if (user.validPassword(password, user.password)) {
    res.status(400).send({ message: "Wrong Password !" });
  }
};

// * @desc Mise à jour du profil utilisateur
// * @route POST /api/user/update

module.exports.updateProfile = async (req, res) => {
  const { password, image, bio } = req.body;

  //~ Vérification de la présence du token JWT et de sa validité
  const auth = verifyAuth(req);
  if (!auth[0]) return res.status(400).send({ message: "Access Denied !" });
  else {
    //~ Modification du profil utilisateur
    await User.update(
      { password, image, bio },
      { where: { id_user: auth[0] }, individualHooks: true }
    );
    res.status(201).send({ message: "Account succesfully edit !" });
  }
};