const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');
const extractionQuery = require('./extractionQuery').schema;

var schema = mongoose.Schema({
    name: { type: String, default: "Extractor sin nombre" },
    description: { type: String, default: "Sin descripción" },
    source: { type: String, required: true, unique: true },
    module: { type: String, required: true },
    templates: { type: [extractionQuery], default: [] },
    active: { type: Boolean, default: true },
    icon: { type: String },
    created_at: { type: String, default: new Date().toLocaleString() }
});

schema.plugin(pagination);

var Extractor = mongoose.model('extractor', schema);

module.exports = Extractor;
