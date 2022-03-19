const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const bcrypt = require("bcrypt");

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
  {
    tableName: "users",
    timestamps: false,
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync(10, "a");
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  }
);

User.prototype.validPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = User;
