require("dotenv").config({ path: "src/server/configs/.env" });

const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();

//# Middlewares

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//# JWT
const { checkUser } = require("./middlewares/auth.middleware");

app.use(checkUser);

//# Routes
const UserRoutes = require("./routes/user.routes");
const QuizzRoutes = require("./routes/quizz.routes");
const StatRoutes = require("./routes/stat.routes");
const CategoryRoutes = require("./routes/category.routes");

app.use("/api/user", UserRoutes);
app.use("/api/quizz", QuizzRoutes);
app.use("/api/stat", StatRoutes);
app.use("/api/category", CategoryRoutes);

//~ On écoute l'application
app.listen(process.env.PORT, () => {
  console.log(`Server listen on PORT : ${process.env.PORT}`);
});
