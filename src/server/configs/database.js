const { Sequelize } = require("sequelize");

//~ Connexion et authentification à la base de données
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  database: "quizz",
  logging: false,
  // storage: "src/server/configs/db.sqlite",
});

sequelize.authenticate();
// sequelize.sync({});

module.exports = sequelize;
