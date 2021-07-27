const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');
const searchQuery = require('./searchQuery').schema;

var schema = mongoose.Schema({
    name: { type: String, default: "Motor de búsqueda sin nombre" },
    description: { type: String, default: "Sin descripción" },
    source: { type: String, required: true, unique: true },
    module: { type: String, required: true },
    active: { type: Boolean, default: true },
    templates: { type: [searchQuery], default: [] },
    icon: { type: String },
    created_at: { type: String, default: new Date().toLocaleString() }
});

schema.plugin(pagination);

var SearchEngine = mongoose.model('searchEngine', schema, 'searchEngines');

module.exports = SearchEngine;
