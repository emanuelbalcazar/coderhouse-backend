const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var paramSchema = mongoose.Schema({
    key: { type: String },
    value: { type: String },
    required: { type: Boolean, default: false },
    label: { type: String, default: "Parametro sin descripcion" },
    type: { type: String, default: "text", enum: ["boolean", "date", "email", "number", "password", "text", "url"] },
    disabled: { type: Boolean, default: false },
    hidden: { type: Boolean, default: false }
});

var schema = mongoose.Schema({
    name: { type: String, default: "Consulta de búsqueda" },
    description: { type: String, default: "Sin descripción" },
    source: { type: String, required: true },
    target: { type: String, required: false },
    method: { type: String, default: "GET", enum: ["GET", "POST", "PUT", "DELETE"], required: true },
    url: { type: String, default: "" },
    resource: { type: String, default: "" },
    resourceParams: { type: [paramSchema], default: [] },
    queryParams: { type: [paramSchema], default: [] }
});

schema.plugin(pagination);

var SearchQuery = mongoose.model('searchQuery', schema, 'searchQueries');

module.exports.model = SearchQuery;
module.exports.schema = schema;
