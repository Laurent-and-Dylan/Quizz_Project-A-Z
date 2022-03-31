const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

//~ Définition du modéle statistique
const Stats = sequelize.define(
  "Stats",
  {
    id_stats: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: { type: DataTypes.INTEGER },
    id_quizz: { type: DataTypes.INTEGER },
    points: { type: DataTypes.INTEGER },
    date: { type: DataTypes.DATE },
  },
  { tableName: "stats", freezeTableName: true, timestamps: false }
);

module.exports = Stats;
