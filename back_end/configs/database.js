const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./configs/db.sqlite",
  logging: false,
});

sequelize.authenticate();

module.exports = sequelize;
