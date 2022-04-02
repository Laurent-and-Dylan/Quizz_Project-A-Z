const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

//~ Définition du modéle question
const Category = sequelize.define(
  "Category",
  {
    id_category: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING(30), allowNull: false },
    image: { type: DataTypes.STRING },
  },
  { tableName: "categories", freezeTableName: true, timestamps: false }
);

module.exports = Category;
