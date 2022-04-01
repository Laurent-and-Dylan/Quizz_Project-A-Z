const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

//# @desc Middleware d'authentification grâce au JWT fourni à la connexion de l'utilisateur
//! Possibilité d'amélioratiion
module.exports.checkUser = (req, res, next) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        // ~ Si l'utilisateur possède un mauvais token, retrait de celui-ci, retrait des informations locals et redirection sur la page d'accueil
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 0 });
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

//# @desc Vérification de la présence d'un id utilsateur ou d'un status administrateur dans le JWT token
module.exports.verifyAuth = (req) => {
  const token = req.body.token;
  if (!token) return false;
  const { id_user, status } = jwt.verify(token, process.env.SECRET_TOKEN)
    ? jwt.verify(token, process.env.SECRET_TOKEN)
    : null;

  if (id_user && !status) return [id_user, false];
  else if (status) return [id_user, true];
  else {
    req.cookies("jwt", "", 0);
    return [false, false];
  }
};
