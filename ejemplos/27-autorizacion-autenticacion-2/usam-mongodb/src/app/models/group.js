const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, default: "sin descripción" },
    type: { type: String, default: "group" },
    active: { type: Boolean, default: true }
});

schema.plugin(pagination);

var Group = mongoose.model('group', schema);

module.exports = Group;
