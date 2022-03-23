const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 0 });
        res.redirect("/");
        next();
      } else {
        let user = await User.findOne({ where: { id_user: decodedToken.id } });
        res.locals.user = user.dataValues;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
