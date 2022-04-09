const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const bcrypt = require("bcrypt");

//~ Définition du modéle user
const User = sequelize.define(
  "Users",
  {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING(30) },
    email: { type: DataTypes.STRING(100) },
    password: { type: DataTypes.STRING },
    insc_date: { type: DataTypes.DATE },
    image: {
      type: DataTypes.STRING(100),
      defaultValue: "./styles/images/avatarH.png",
    },
    bio: { type: DataTypes.STRING(200) },
    status: { type: DataTypes.BOOLEAN },
  },
  {
    tableName: "users",
    freezeTableName: true,
    timestamps: false,
    hooks: {
      //~ Function de hashage des mots de passes obligatoire avant tout enregistrement dans la table users
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync(10, "a");
        user.password = bcrypt.hashSync(user.password, salt);
      },
      beforeUpdate: (user) => {
        const salt = bcrypt.genSaltSync(10, "a");
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  }
);

//~ Function de vérication des mots de passes
User.prototype.validPassword = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
};

module.exports = User;
