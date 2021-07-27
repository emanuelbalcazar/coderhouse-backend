// module of connection to the database.
const mongoose = require('mongoose');
const url = require('../config/configuration').MONGO_URL;

const connection = mongoose.connect(url, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - connected in:', url);
});

mongoose.connection.on('error', (err) => {
    console.log('[Mongoose] - error:', err);
});

module.exports = connection;
