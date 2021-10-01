const path = require('path');
const dotenv = require('dotenv');
//require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
});


module.exports.ENV = process.env.NODE_ENV;
module.exports.HOST = process.env.HOST || 'http://localhost';
module.exports.PORT = process.env.PORT || 8000;
module.exports.MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mern';
module.exports.PERSISTENCE = process.env.PERSISTENCE || 'mongodb';
module.exports.GRAPHIQL = process.env.GRAPHIQL || true;
