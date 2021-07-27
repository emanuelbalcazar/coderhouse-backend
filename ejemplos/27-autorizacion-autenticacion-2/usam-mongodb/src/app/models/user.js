const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: { type: String },
    surname: { type: String },
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String },
    role: { type: String, default: "estandar" },
    created_at: { type: String, default: new Date().toLocaleString() },
    type: { type: String, default: "user" },
    createdBy: { type: String },
    active: { type: Boolean, default: true }
});

schema.plugin(pagination);

var User = mongoose.model('user', schema);

module.exports = User;
