const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Configuración inicial
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('<h1>Servidor Patagonia Tracker activo</h1>');
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});