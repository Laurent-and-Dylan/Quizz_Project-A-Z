const Category = require("../models/category.model");

module.exports.createOne = (req, res) => {
  Category.create({ name: req.body.name });
  res.status(201).send({ message: "Category create" });
};

module.exports.getAll = async (req, res) => {
  const results = await Category.findAll();

  if (results) res.status(200).send({ results });
  else res.status(404).send({ results });
};
