const express = require("express");
const path = require("path");

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname + "/views"));

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 App Node.js corriendo con Docker y conectado a MongoDB");
});

module.exports = app;

