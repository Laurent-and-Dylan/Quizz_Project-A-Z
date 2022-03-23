const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

//~ Définition du modéle response
const Response = sequelize.define(
  "Responses",
  {
    id_response: { type: DataTypes.INTEGER, primaryKey: true },
    id_question: { type: DataTypes.INTEGER },
    response: { type: DataTypes.STRING },
    value: { type: DataTypes.BOOLEAN },
  },
  { tableName: "responses", freezeTableName: true, timestamps: false }
);

module.exports = Response;
