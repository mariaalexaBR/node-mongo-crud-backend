const mongoose = require('mongoose')

// Variables de entorno de conexión
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;

// URI de conexión a MongoDB
const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/?authSource=admin`;

console.log("Intentando conectar a:", mongoURI);

// Conexión a MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
  })
  .catch(err => {
    console.error("❌ Error al conectar a MongoDB:", err);
  });