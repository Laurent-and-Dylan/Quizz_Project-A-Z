const User = require("../models/user.model");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { verifyAuth } = require("../middlewares/auth.middleware");

// * @desc Création d'un utilisateur
// * @route POST /api/user/register

const register = async (req, res) => {
  //^ const pseudo = req.body.pseudo
  //^ const email = req.body.email
  //^ const password = req.body.password
  const { username, email, password } = req.body;

  //~ Requête vérifier la présence d'un utilisateur dans la database ou création de celui-ci
  const user = await User.findOne({
    where: { [Op.or]: { username, email } },
    raw: true,
  });

  //~ Structure de contrôle pour vérifier si le pseudo ou l'email n'est pas déjà existant
  if (user) {
    if (user.username === username) {
      return res
        .status(400)
        .send({ register: false, errors: `${username} already exist !` });
    } else if (user.email === email) {
      return res
        .status(400)
        .send({ register: false, errors: `${email} already exist !` });
    }
  }

  //~ Requête de création d'un utilisateur

  const { id_user, status } = await User.create({ username, email, password });

  let token = jwt.sign({ id_user, status }, process.env.SECRET_TOKEN);

  res.status(201).send({ register: true, username, token, id_user });
};

// * @desc Connexion d'un utilisateur
// * @route POST /api/user/login

const login = async (req, res) => {
  const { pseudo, password } = req.body;

  // ~ Requête pour récuperer les infos d'un utilisateur si l'email ou l'username correspondent plus structure de contrôle
  const user = await User.findOne({
    where: { [Op.or]: { username: pseudo, email: pseudo } },
  });
  if (!user)
    return res.status(404).send({ connexion: false, errors: "Wrong Pseudo !" });

  //~ Vérification de la coherence des passwords et création d'un token web sous format JSON placé dans un cookie
  if (user.validPassword(password, user.dataValues.password)) {
    const { id_user, status } = user;
    let token = jwt.sign({ id_user, status }, process.env.SECRET_TOKEN);

    return res.status(200).send({
      connexion: true,
      token,
      username: user.username,
      id_user: user.id_user,
    });
  } else
    return res
      .status(400)
      .send({ connexion: false, errors: "Wrong Password !" });
};

// * @desc Déconnexion d'un utilisateur
// * @route GET /api/user/logout

const logout = (req, res) => {
  //~ Retrait du cookie JWT, des infos locals utilisateur et redirection sur la page d'accueil

  res.cookie("jwt", "", { maxAge: 0 });
  res.locals.user = null;
  res.redirect("/");
};

// * @desc Suppression d'un utilisateur
// * @route POST /api/user/delete

const deleted = async (req, res) => {
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
// * @route PUT /api/user/update

const updateProfile = async (req, res) => {
  const { username, email } = req.body;
  //~ Vérification de la présence du token JWT et de sa validité
  const auth = verifyAuth(req);
  if (!auth[0]) return res.status(400).send(false);
  else {
    //~ Modification du profil utilisateur
    await User.update(
      { username, email },
      { where: { id_user: auth[0] }, individualHooks: true }
    );
    res.status(201).send(true);
  }
};

// * @desc Vérification des infos de session pour reconnexion
// * @route POST /api/user/authentifier

async function alreadyLog(req, res) {
  const { id_user } = req.body;
  const auth = verifyAuth(req);

  if (id_user == auth[0]) {
    const { username } = await User.findOne({
      where: { id_user },
      attributes: ["username"],
    });
    res.status(200).send({ connected: true, username });
  } else res.status(400).send(false);
}

// * @desc Récupération d'info utilisateur
// * @route POST /api/user/getUser

async function getUser(req, res) {
  const { id_user } = req.body;
  const auth = verifyAuth(req);

  if (id_user == auth[0]) {
    const results = await User.findOne({
      where: { id_user },
      attributes: ["username", "email", "image"],
    });
    res.status(200).send({ results });
  } else res.status(400).send(false);
}

module.exports = {
  login,
  register,
  updateProfile,
  deleted,
  logout,
  alreadyLog,
  getUser,
};
