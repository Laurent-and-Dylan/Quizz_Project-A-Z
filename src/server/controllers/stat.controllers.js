const Stats = require("../models/stat.model");
const Quizz = require("../models/quizz.model");
const Users = require("../models/user.model");
const { Op } = require("sequelize");
const { verifyAuth } = require("../middlewares/auth.middleware");

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
  const stats = await Stats.findAll({
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
  Quizz.hasMany(Stats);
  Stats.belongsTo(Quizz, { foreignKey: "id_quizz" });

  const { id_user } = req.params;

  //~ Requête récupérant les informations de l'utilisqateur plus structure de contrôle
  const user = await Users.findOne({
    attributes: ["username", "image"],
    where: { id_user },
  });

  if (!user) return res.status(404).send({ message: "Utilisateur inconnu !" });

  //~ Requête récupérant les stats grâce à l'id du quizz
  // ! Possibilité d'optimisation...
  const stats = await Stats.findAll({
    order: [["points", "DESC"]],
    attributes: ["points", "date"],
    where: { id_user },
    include: [
      {
        model: Quizz,
        as: "Quizz",
        attributes: ["name"],
      },
    ],
  });

  res.status(200).send({ results: { user, stats } });
};

//* @desc Ajouter stats d'un utilisateur
//* @route POST /api/stat/

module.exports.addStat = async (req, res) => {
  let { id_quizz, points } = req.body;
  const auth = verifyAuth(req);
  if (!auth)
    return res
      .status(400)
      .send({ message: "Veuillez créer un compte ou vous connecter" });

  const id_user = auth[0];

  //~ Requête pour introduire le score dans la base de donnée
  const stat = await Stats.create({
    id_user,
    id_quizz,
    points,
  });

  if (!stat) return res.status(404).send(false);

  res.status(200).send(true);
};
