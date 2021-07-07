const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, require: true, max: 100 },
    username: { type: String, require: true, max: 100, unique: true },
    password: { type: String, require: true, max: 100 }
});

const User = mongoose.model('users', schema);

module.exports = User;