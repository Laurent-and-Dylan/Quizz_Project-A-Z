const { Sequelize } = require("sequelize");

//~ Connexion et authentification à la base de données
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "src/server/configs/db.sqlite",
  logging: false,
});

sequelize.authenticate();

module.exports = sequelize;
