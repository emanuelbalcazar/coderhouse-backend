const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

schema.plugin(pagination);

var Topic = mongoose.model('topic', schema);

module.exports = Topic;
