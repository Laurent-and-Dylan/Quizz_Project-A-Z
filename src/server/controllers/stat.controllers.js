const Stat = require("../models/stat.model");
const Quizz = require("../models/quizz.model");
const Users = require("../models/user.model");
const { Op } = require("sequelize");

//* @desc Récupérer les stats d'un quizz précis
//* @route GET /api/stat/quizz/:id_quizz

module.exports.statOfQuizz = async (req, res) => {
  const { id_quizz } = req.params;

  //~ Requête récupérant le quizz par son id plus structure de contrôle
  const quizz = await Quizz.findOne({
    attributes: ["id_quizz", "name"],
    where: { id_quizz },
  });
  if (!quizz) return res.status(404).send({ message: "Quizz inconnu !" });

  //~ Requête récupérant les stats grâce à l'id du quizz
  const stats = await Stat.findAll({
    attributes: ["id_user", "points", "date"],
    where: { id_quizz },
  });

  //~ Récupération des id utilisateurs
  let id_user = [];
  for (i in stats) {
    id_user.push(stats[i].dataValues.id_user);
  }

  //~ Requête récupérant les users grâce au l'id
  const users = await Users.findAll({
    attributes: ["id_user", "username"],
    where: { [Op.or]: { id_user } },
  });

  res.status(200).send({ quizz, users, stats });
};

//* @desc Récuperer les stats liés à un utilisateur précis
//* @route GET /api/stat/user/:id_user

module.exports.statOfUser = async (req, res) => {
  const { id_user } = req.params;

  //~ Requête récupérant les informations de l'utilisqateur plus structure de contrôle
  const user = await Users.findOne({
    attributes: ["username", "image"],
    where: { id_user },
  });
  if (!user) return res.status(404).send({ message: "Utilisateur inconnu !" });

  //~ Requête récupérant les stats grâce à l'id du quizz
  // ! Possibilité d'optimisation...
  const stats = await Stat.findAll({
    order: [["points", "DESC"]],
    attributes: ["id_quizz", "points", "date"],
    where: { id_user },
  });

  res.status(200).send({ user, stats });
};

//* @desc Ajouter stats d'un utilisateur
//* @route GET /api/stat/user/:id_user
