require("dotenv").config({ path: "./configs/.env" });

const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server listen on PORT : ${process.env.PORT}`);
});
