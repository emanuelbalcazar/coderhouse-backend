const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: { type: String, require: true, max: 100 },
    apellido: { type: String, require: true, max: 100 },
    edad: { type: Number, require: true },
    dni: { type: String, unique: true },
    curso: { type: String, require: true, max: 100 },
    nota: { type: Number, require: true }
}, {strict: false});

const Estudiante = mongoose.model('estudiantes', schema);

module.exports = Estudiante;