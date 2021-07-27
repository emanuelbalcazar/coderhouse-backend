const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, default: "sin descripción" },
    type: { type: String, default: "namespace" }
});

schema.plugin(pagination);

var NameSpace = mongoose.model('namespace', schema);

module.exports = NameSpace;
