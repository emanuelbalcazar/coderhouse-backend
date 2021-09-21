const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    dni: { type: String, require: true }
});

const Persona = mongoose.model('persona', schema);

module.exports = Persona;