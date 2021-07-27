const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');
var article = require('./article');

var schema = article;

schema.add({
    'status': { type: String, default: 'pending', enum: ['pending', 'ready'] }
});

schema.plugin(pagination);

var ImportedData = mongoose.model('importedData', schema, 'importedData');

module.exports = ImportedData;
