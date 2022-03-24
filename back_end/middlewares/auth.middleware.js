const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

//~ Middleware d'authentification grâce au JWT fourni à la connexion de l'utilisateur
module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        // ~ Si l'utilisateur possède un mauvais token, retrait de celui-ci, retrait des informations locals et redirection sur la page d'accueil
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 0 });
        res.redirect("/");
        next();
      } else {
        // ~ Si l'utilisateur possède un token valide
        let user = await User.findOne({
          where: { id_user: decodedToken.id_user },
        });
        res.locals.user = user.dataValues;
        next();
      }
    });
  } else {
    //~ Si l'utilisateur n'est pas connecté et ne possède pas de token
    res.locals.user = null;
    next();
  }
};

module.exports.verifyAuth = (req) => {
  const token = req.cookies.jwt;
  if (!token) return false;
  const { id_user, status } = jwt.verify(token, process.env.SECRET_TOKEN)
    ? jwt.verify(token, process.env.SECRET_TOKEN)
    : null;

  if (id_user && !status) return id_user;
  else if (status) return "admin";
  else {
    req.cookies("jwt", "", 0);
    return false;
  }
};
