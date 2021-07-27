const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');
const articleSchema = require('./article');

var schema = mongoose.Schema({
    extractionQueryId: { type: mongoose.Schema.Types.ObjectId, ref: 'extractionQuery' },
    name: { type: String },
    results: { type: [articleSchema] },
    source: { type: String, required: true },
    target: { type: String, required: false },
    created_at: { type: String, default: new Date().toLocaleString() }
});

schema.plugin(pagination);

var ExtractionResult = mongoose.model('extractionResult', schema, 'extractionResults');

module.exports = ExtractionResult;
