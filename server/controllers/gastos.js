const Gasto = require('../models/Gasto');

// Obtener todos los gastos
const getGastos = async (req, res) => {
  try {
    // Busca todos los registros en la colección, ordenados por fecha descendente (más nuevo primero)
    const gastos = await Gasto.find({}).sort({ fecha: -1 });
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los gastos' });
  }
};

// Crear un nuevo gasto
const createGasto = async (req, res) => {
  const { monto, detalle, categoria, pagadoPor, metodoPago, fecha } = req.body;

  // Validación básica manual (aunque Mongoose también valida)
  if (!monto || !categoria || !pagadoPor || !metodoPago) {
    return res.status(400).json({ 
      error: 'Faltan campos requeridos: monto, categoria, pagadoPor o metodoPago' 
    });
  }

  const nuevoGasto = new Gasto({
    monto,
    detalle,
    categoria,
    pagadoPor,
    metodoPago,
    // Si viene fecha úsala, si no, usa la actual (Date.now lo maneja el modelo por defecto)
    fecha: fecha || Date.now() 
  });

  try {
    const gastoGuardado = await nuevoGasto.save();
    res.status(201).json(gastoGuardado); // 201 Created
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGastos,
  createGasto
};