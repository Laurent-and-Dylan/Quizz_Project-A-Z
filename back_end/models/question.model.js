const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

//~ Définition du modéle question
const Question = sequelize.define(
  "Question",
  {
    id_question: { type: DataTypes.INTEGER, primaryKey: true },
    id_quizz: { type: DataTypes.INTEGER },
    id_category: { type: DataTypes.INTEGER },
    question: { type: DataTypes.STRING(255) },
  },
  { tableName: "questions", freezeTableName: true, timestamps: false }
);

module.exports = Question;
