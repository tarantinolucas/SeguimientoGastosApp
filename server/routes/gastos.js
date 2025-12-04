const express = require("express");
const router = express.Router();
const gastosController = require("../controllers/gastos");

// Definición de endpoints
// GET /api/gastos
router.get("/", gastosController.getGastos);

// POST /api/gastos
router.post("/", gastosController.createGasto);

module.exports = router;
