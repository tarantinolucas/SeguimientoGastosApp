const mongoose = require('mongoose');

const gastoSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  monto: {
    type: Number,
    required: true
  },
  detalle: {
    type: String,
    required: false
  },
  categoria: {
    type: String,
    enum: ['Comida', 'Nafta', 'Hospedaje', 'Excursión', 'Otros'],
    required: true
  },
  pagadoPor: {
    type: String,
    enum: ['Lucas', 'Sofía'],
    required: true
  },
  metodoPago: {
    type: String,
    // Actualizado según tu requerimiento de diseño
    enum: ['Efectivo', 'Débito', 'Crédito'],
    required: true
  }
});

// Configuración para limpiar el objeto al devolverlo al frontend
gastoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Gasto', gastoSchema);