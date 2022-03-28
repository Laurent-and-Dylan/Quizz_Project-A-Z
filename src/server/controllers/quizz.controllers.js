const Question = require("../models/question.model");
const Response = require("../models/response.model");
const Quizz = require("../models/quizz.model");
const { Op, Sequelize } = require("sequelize");
const { verifyAuth } = require("../middlewares/auth.middleware");

//* @desc Création d'un quizz aléatoire
//* @route GET /api/quizz/random

module.exports.random = async (req, res) => {
  //~ Requête pour récupérer 20 questions aléatoirement
  const questions = await Question.findAll({
    order: Sequelize.literal("random()"),
    limit: 5,
    raw: true,
  });

  //~ Création d'un tableau contenant l'id de chaque question
  let id_question = [];
  for (i in questions) {
    id_question.push(questions[i].id_question);
  }

  //~ Seconde requête pour récupérer les résponses grâce à l'id question
  const responses = await Response.findAll({
    where: { [Op.or]: { id_question } },
  });
  
  const results = [];
  for (i in questions) {
    results.push([questions[i].question]);
    for (b in responses) {
      if (responses[b].id_question === questions[i].id_question) {
        results[i].push([responses[b].response, responses[b].value]);
      }
    }
  }
  res.send({ results });
};

//* @desc Récupération des quizz lié au une catégorie précise
//* @route GET /api/quizz/category/:id_category

module.exports.quizzOfCategory = async (req, res) => {
  const { id_category } = req.params;

  //~ Requête pour récupérer les quizz lié à une catégorie, plus structure de contrôle
  const quizz = await Quizz.findAll({ where: { id_category } });
  if (quizz.length === 0)
    return res.status(404).send({ message: "Category or quizz unknow" });

  res.status(200).send({ quizz });
};

//* @desc Récupération d'un quizz précis
//* @route GET /api/quizz/:id_quizz

module.exports.getQuizz = async (req, res) => {
  const { id_quizz } = req.params;

  //~ Requête récupérant le quizz par son id
  const quizz = await Quizz.findOne({ where: { id_quizz } });
  if (!quizz) return res.status(404).send("Quizz inconnu !");

  //~ Requête pour récupéré les questions liées au quizz
  const questions = await Question.findAll({
    attributes: ["id_question", "question"],
    where: { id_quizz: quizz.dataValues.id_quizz },
  });

  //~ Récupération de l'id de chaque question
  let id_question = [];
  for (i in questions) {
    id_question.push(questions[i].dataValues.id_question);
  }

  //~ Requête pour récupérer les réponses de chaque question
  const responses = await Response.findAll({
    attributes: ["id_question", "response", "value"],
    where: { [Op.or]: { id_question } },
  });

  //~ Gestion d'erreur et renvoie de la réponse au client
  if (!questions || !responses)
    return res.status(400).send("Erreur veuillez réesayez ultérieurement !");

  res.send({ quizz, questions, responses });
};

//* @desc Création d'un quizz par un utilisateur
//* @route POST /api/quizz/creation

module.exports.createQuizz = async (req, res) => {
  const { quests, resps, name, id_category } = req.body;
  let id_quest = [];

  // //~ Controle d'authorisation de l'utilisateur
  const auth = verifyAuth(req);
  if (!auth)
    return res
      .status(400)
      .send({ message: "Veuillez créer un compte ou vous connecter" });

  //~ Création du quizz
  const quizz = await Quizz.findOrBuild({
    //-- renvoie un tableau contenant le résultat et un boolean
    where: { name },
    defaults: { id_user: auth, id_category, name },
    raw: true,
  });

  if (quizz[1]) {
    await quizz[0].save(); //-- création du quizz

    //~ Création des questions lié à l'id du quizz précédemment créé
    //~ Boucle sur le tableau questions pour récupérer l'id de chacune et les inserer dans colonne id_quizz sous contrainte (FOREIGN KEY)
    for (q in quests) {
      const { id_question } = await Question.create(
        {
          id_quizz: quizz[0].id_quizz,
          id_category,
          question: quests[q],
        },
        { raw: true }
      );

      //~ Mise dans un tableau des id de chaque question
      id_quest.push(id_question);
    }
  }

  //~ Création des réponses lié à chaque id de la question correspondante
  //~ Boucle sur le tableau des id de questions puis sur celui du tableau des réponses
  for (id in id_quest) {
    for (asc in resps[id]) {
      Response.create(
        {
          id_question: id_quest[id],
          response: resps[id][asc][0],
          value: resps[id][asc][1],
        },
        { raw: true }
      );
    }
  }

  res.status(201).send({
    message: "Félicitation vous venez de créer votre nouveau Quizz !",
  });
};

//* @desc Suppression d'un quizz par un utilisateur ou un administrateur
//* @route DELETE /api/quizz/delete/:id_quizz
// ! Mettre en place l'authorisation admin

module.exports.deleteQuizz = async (req, res) => {
  const { id_quizz } = req.params;

  // //~ Controle d'authorisation de l'utilisateur
  const auth = verifyAuth(req);
  if (!auth)
    return res
      .status(400)
      .send({ message: "You are not authorized to perform this operation" });

  //~ Requête pour récuperer l'id du créateur du quizz
  const { id_user } = await Quizz.findOne({
    where: { id_quizz },
    attributes: ["id_user"],
  });

  //~ Structure de contrôle pour vérifiér le créateur du quizz et l'utilasateur faisant la requête
  if (auth === id_user) {
    Quizz.destroy({ where: { id_quizz } });
    return res.status(200).send({ message: "Your quizz has been deleted" });
  } else {
    res.status(400).send({ message: "An error has occurred" });
  }
};

//* @desc Modification d'un quizz par un utilisateur
//* @route PUT /api/quizz/edit/:id_quizz
// ! Fixer le probleme de name quizz déjà utilisé
module.exports.editQuizz = async (req, res) => {
  const { id_quizz } = req.params;
  const { quests, resps, name } = req.body;

  //~ Controle d'authorisation de l'utilisateur
  const auth = verifyAuth(req);
  if (!auth)
    return res
      .status(400)
      .send({ message: "You are not authorized to perform this operation" });

  const quizz = await Quizz.findOne({
    where: { [Op.and]: { id_quizz, id_user: auth } },
  });

  if (quizz === null && auth !== "admin")
    return res.status(400).send({ message: "Acces Denied" });

  //~ Requête pour mettre à jour le nom du quizz
  await Quizz.update({ name }, { where: { id_quizz } });

  //~ Requête pour mettre à jour les questions du quizz
  for (q in quests) {
    await Question.update(
      { question: quests[q][0] },
      { where: { id_question: [quests[q][1]] } }
    );
  }

  //~ Requête pour mettre à jour les réponses de chaque question
  for (r in resps) {
    await Response.update(
      { response: resps[r][0] },
      { where: { id_response: [resps[r][1]] } }
    );
  }

  res
    .status(201)
    .send({ message: `Your quizz ${name} has been edit correctly !` });
};

//* @desc Récupération de s quizz lié à un utilisateur
//* @route GET /api/quizz/:id_user

module.exports.getAllQuizzByUser = async (req, res) => {
  const { id_user } = req.params;

  //~ Controle d'authorisation de l'utilisateur
  const auth = verifyAuth(req);
  if (!auth) return res.status(400).send({ message: "Access Denied !" });

  if (auth === id_user || auth === "admin") {
    //~ Requête pour récupérer tout les quizz
    const quizz = await Quizz.findAll({ where: { id_user }, raw: true });

    //~ Sructure de contrôle et renvoie de réponse
    if (!quizz[0])
      return res.status(404).send({ message: "You do not have Quizz" });
    return res.status(200).send({ quizz });
  } else res.status(400).send({ message: "Access Denied !" });
};
