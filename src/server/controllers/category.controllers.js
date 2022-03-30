const Category = require("../models/category.model");

module.exports.createOne = (req, res) => {
  Category.create({ name: req.body.name });
  res.status(201).send({ message: "Category create" });
};
