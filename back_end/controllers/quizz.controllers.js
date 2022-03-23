const Question = require("../models/question.model");
const Response = require("../models/response.model");
const Quizz = require("../models/quizz.model");
const { Op } = require("sequelize");

module.exports.random = async (req, res) => {
  // Requête pour récupérer 20 questions aléatoirement
  const questions = await Question.findAll({
    order: Sequelize.literal("random()"),
    limit: 20,
  });

  // Création d'un tableau contenant l'id de chaque question
  let id_question = [];
  for (i in questions) {
    id_question.push(questions[i].id_question);
  }

  // Seconde requête pour récupérer les résponses grâce à l'id question
  const response = await Response.findAll({
    where: { [Op.or]: { id_question } },
  });

  res.send({ questions, response });
};

module.exports.quizzOfCategory = async (req, res) => {
  const { id_category } = req.params;

  const quizz = await Quizz.findAll({ where: { id_category } });
  res.send(quizz);
};

module.exports.getQuizz = async (req, res) => {
  const { id_quizz } = req.params;

  // Requête récupérant le quizz par son id
  const quizz = await Quizz.findOne({ where: { id_quizz } });
  if (quizz) return res.status(400).send("Quizz inconnu !");

  // Requête pour récupéré les questions liées au quizz
  const questions = await Question.findAll({
    attributes: ["id_question", "question"],
    where: { id_quizz: quizz.dataValues.id_quizz },
  });

  // Récupération de l'id de chaque question
  let id_question = [];
  for (i in questions) {
    id_question.push(questions[i].dataValues.id_question);
  }

  // Requête pour récupérer les réponses de chaque question
  const responses = await Response.findAll({
    attributes: ["id_question", "response", "value"],
    where: { [Op.or]: { id_question } },
  });

  // Gestion d'erreur et renvoie de la réponse au client
  if (!questions || !responses)
    return res.status(400).send("Erreur veuillez réesayez ultérieurement !");

  res.send({ quizz, questions, responses });
};
