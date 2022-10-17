require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/db");
/* const userRoutes = require("./v1/routes/users.routes");
const followRoutes = require("./v1/routes/follows.routes");
const hobbieRoutes = require("./v1/routes/hobbies.routes");
const postRoutes = require("./v1/routes/posts.routes"); */

//Conectarse a la base de datos
connectDB();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routers
/* app.use("/api/v1", userRoutes);
app.use("/api/v1", followRoutes);
app.use("/api/v1", hobbieRoutes);
app.use("/api/v1", postRoutes); */

try {
  app.listen(app.get("port"), console.log(`Server on port ${app.get("port")}`));
} catch (error) {
  console.log(error);
}
