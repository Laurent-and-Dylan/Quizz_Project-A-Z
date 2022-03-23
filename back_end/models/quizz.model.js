const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const Quizz = sequelize.define(
  "Quizz",
  {
    id_quizz: { type: DataTypes.INTEGER, primaryKey: true },
    id_user: { type: DataTypes.INTEGER },
    id_category: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING(50) },
  },
  { tableName: "quizz", freezeTableName: true, timestamps: false }
);

module.exports = Quizz;
