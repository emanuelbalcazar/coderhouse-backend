const mongoose = require('mongoose');
const pagination = require('mongoose-paginate');

var schema = mongoose.Schema({
    reactions: { type: Array, default: [] },   // likes, retweets, shares, favorites, etc.
    author: {
        id: { type: String },
        name: { type: String },
        description: { type: String },
        url: { type: String },
        image: { type: String },
        location: { type: String }
    },
    comments: { type: Array, default: [] },
    fullText: { type: String },               // content.
    id: { type: String },
    image: { type: String },                 // link to an image.
    link: { type: String },                  // link to the original article.
    location: {                              // location where the article was written.
        title: { type: String },
        latitude: { type: Number },
        longitude: { type: Number }
    },
    publishDate: { type: String },              // publication date.
    title: { type: String },                  // article title.
    type: { type: String, enum: ["articulo", "noticia", "post", "comentario"] },
    sentiment: { type: String },              // sentiment valoration.
    source: { type: String, required: true }, // facebook, twitter, news, etc.
    target: { type: String, required: false },   // topic: mineria, evo morales, macri, etc.
    owner: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        userName: { type: String }
    },
    snippet: { type: String },
    tags: { type: [String], default: [] }
});

schema.plugin(pagination);

module.exports = schema;
