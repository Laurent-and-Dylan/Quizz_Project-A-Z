const Stat = require("../models/stat.model");
const Quizz = require("../models/quizz.model");
const Users = require("../models/user.model");
const { Op } = require("sequelize");

//* @desc Récupérer les stats d'un quizz en particulier
//* @route GET /api/stat/quizz/:id_quizz

module.exports.statOfQuizz = async (req, res) => {
  //~ Requête récupérant le quizz par son id
  const { id_quizz } = req.params;
  const quizz = await Quizz.findOne({
    attributes: ["id_quizz", "name"],
    where: { id_quizz },
  });
  if (!quizz) return res.status(400).send("Quizz inconnu !");

  const stats = await Stat.findAll({
    attributes: ["id_user", "points", "date"],
    where: { id_quizz },
  });

  let id_user = [];
  for (i in stats) {
    id_user.push(stats[i].dataValues.id_user);
  }
  const users = await Users.findAll({
    attributes: ["id_user", "username"],
    where: { [Op.or]: { id_user } },
  });

  res.status(200).send({ quizz, users, stats });
};

module.exports.statOfUser = (req, res) => {};
