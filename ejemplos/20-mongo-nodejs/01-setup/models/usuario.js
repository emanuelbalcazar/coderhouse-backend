const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: { type: String, require: true, max: 100 },
    apellido: { type: String, require: true, max: 100 },
    email: { type: String, require: true, max: 100 },
    usuario: { type: String, require: true, max: 100 },
    password: { type: Number, require: true }
});

const Usuario = mongoose.model('usuarios', schema);

module.exports = Usuario;