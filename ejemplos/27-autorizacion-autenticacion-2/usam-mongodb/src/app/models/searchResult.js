const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');
const articleSchema = require('./article');

var schema = mongoose.Schema({
    searchQueryId: { type: mongoose.Schema.Types.ObjectId, ref: 'searchQuery' },
    name: { type: String },
    source: { type: String, required: true },
    target: { type: String, required: false },
    results: { type: [articleSchema] },
    created_at: { type: String, default: new Date().toLocaleString() }
});

schema.plugin(pagination);

var SearchResult = mongoose.model('searchResult', schema, 'searchResults');

module.exports = SearchResult;
