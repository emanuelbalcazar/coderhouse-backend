const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

module.exports.HOST = process.env.HOST || 'http://localhost';
module.exports.PORT = process.env.PORT || 8000;
module.exports.MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mern';
module.exports.PERSISTENCE = process.env.PERSISTENCE || 'mongodb';
