const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: { type: String },
    date: { type: String },
    message: { type: String },
    cleanMessage: { type: String },
    sentiment: { type: Number },
    created_at: { type: String, default: new Date().toLocaleString() },
    created_by: { type: String }
});

schema.plugin(pagination);

var Whatsapps = mongoose.model('whatsapps', schema);

module.exports = Whatsapps;
