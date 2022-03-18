const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const User = sequelize.define(
    "User", 
{
  id_user: { type: DataTypes.INTEGER, primaryKey: true },
  username: { type: DataTypes.STRING(30) },
  email: { type: DataTypes.STRING(100) },
  password: { type: DataTypes.STRING },
  insc_date: { type: DataTypes.DATE },
  image: { type: DataTypes.STRING(100) },
  bio: { type: DataTypes.STRING(200) },
  status: { type: DataTypes.BOOLEAN },
},
{tableName:"users", timestamps:false}
// paramétrage à la création avec l'attribut Hooks pour crypter les mots de passe
);

module.exports = User;
