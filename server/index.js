const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Importamos Mongoose
require("dotenv").config();
const gastosRouter = require("./routes/gastos");

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
// Mongoose se encarga de gestionar la conexión
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado exitosamente a MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error.message);
  });

// Ruta base
app.get("/", (req, res) => {
  res.send("<h1>Servidor Patagonia Tracker activo y conectado a BD</h1>");
});

// Rutas API (GASTOS)
app.use("/api/gastos", gastosRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
