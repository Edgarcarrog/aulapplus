require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/db");
const userRoutes = require("./v1/routes/users.routes");
const groupRoutes = require("./v1/routes/groups.routes");
const studentRoutes = require("./v1/routes/students.routes");

//Conectarse a la base de datos
connectDB();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routers
app.use("/api/v1", userRoutes);
app.use("/api/v1", groupRoutes);
app.use("/api/v1", studentRoutes);


try {
  app.listen(app.get("port"), console.log(`Server on port ${app.get("port")}`));
} catch (error) {
  console.log(error);
}
