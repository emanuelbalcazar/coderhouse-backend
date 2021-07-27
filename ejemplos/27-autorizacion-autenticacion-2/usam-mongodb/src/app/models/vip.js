const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var accountSchema = mongoose.Schema({
    source: { type: String, required: true },
    profile: { type: String, required: true },
    url: { type: String }
});

var schema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    accounts: [accountSchema],
    created_at: { type: String, default: new Date().toLocaleString() }
});

schema.plugin(pagination);

var Vip = mongoose.model('vip', schema);

module.exports = Vip;
