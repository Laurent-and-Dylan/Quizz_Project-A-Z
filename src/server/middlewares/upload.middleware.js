const User = require("../models/user.model");
const path = require("path");
const multer = require("multer");
const { verifyAuth } = require("./auth.middleware");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${req.body.user}.jpg`);
  },
});

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|png|jpg|gif/;
  // Check ext
  let extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  let mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
function update(req, file, cb) {
  let auth = verifyAuth(req);

  if (!auth[0]) {
    cb(null, false);
  } else {
    User.update({ image: `${auth[0]}.jpg` }, { where: { id_user: auth[0] } });
    cb(null, true);
  }
}

module.exports.upload = multer({
  storage,
  limits: { fileSize: 500000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
    update(req, file, cb);
  },
}).single("file");
