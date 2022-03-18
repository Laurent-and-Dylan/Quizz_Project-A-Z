require("dotenv").config({ path: "./configs/.env" });

const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes
const UserRoutes = require('./routes/user.routes');

app.use('/api/user', UserRoutes);

// On écoute l'application

app.listen(process.env.PORT, () => {
  console.log(`Server listen on PORT : ${process.env.PORT}`);
});