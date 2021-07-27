const session = require('express-session');
const mongoStore = require('connect-mongo');

class MongoStore {

    constructor() {} 

    getSession() {
        let sessionConfig = session({
            store: mongoStore.create({ mongoUrl: 'mongodb://localhost/sesiones' }),
            secret: 'secret',
            resave: false,
            saveUninitialized: false
        });

        return sessionConfig;
    }
}

module.exports = new MongoStore();