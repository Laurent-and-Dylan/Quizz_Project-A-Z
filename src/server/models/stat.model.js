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
    points: { type: DataTypes.INTEGER, defaultValue: 0 },
    date: { type: DataTypes.STRING(12) },
  },
  {
    tableName: "stats",
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeCreate(stat) {
        let date = Date.now();
        let today = new Date(date);
        today = today.toLocaleDateString();

        stat.date = today;
      },
    },
  }
);

module.exports = Stats;
