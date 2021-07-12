const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: { type: String, required: true, max: 100 },
    apellido: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    usuario: { type: String, required: true, max: 100 },
    password: { type: Number, required: true }
});

const Usuario = mongoose.model('usuarios', schema);

module.exports = Usuario;