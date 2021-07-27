const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var paramSchema = mongoose.Schema({
    key: { type: String },
    value: { type: String },
    required: { type: Boolean, default: false },
    label: { type: String, default: "Parametro sin descripción" },
    type: { type: String, default: "text", enum: ["boolean", "date", "email", "number", "password", "text", "url"] },
    disabled: { type: Boolean, default: false },
    hidden: { type: Boolean, default: false }
});

var schema = mongoose.Schema({
    name: { type: String, default: "Consulta de extracción" },
    description: { type: String, default: "Sin descripción" },
    source: { type: String, required: true },
    target: { type: String, required: false },
    method: { type: String, default: "GET", enum: ["GET", "POST", "PUT", "DELETE"], required: true },
    url: { type: String, default: "" },
    resource: { type: String, default: "" },
    resolver: { type: String, required: true },
    label: { type: String },
    resourceParams: { type: [paramSchema], default: [] },
    queryParams: { type: [paramSchema], default: [] }
});

schema.plugin(pagination);

var ExtractionQuery = mongoose.model('extractionQuery', schema, 'extractionQueries');

module.exports.model = ExtractionQuery;
module.exports.schema = schema;
