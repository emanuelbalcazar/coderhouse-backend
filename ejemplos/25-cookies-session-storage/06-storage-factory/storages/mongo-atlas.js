const session = require('express-session');
const MongoStore = require('connect-mongo');
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

class MongoAtlasStore {

    constructor() { }

    getSession() {
        let sessionConfig = session({
            store: MongoStore.create({
                //En Atlas connect App :  Make sure to change the node version to 2.2.12:
                mongoUrl: 'mongodb+srv://root:root@cluster0.1w8lp.mongodb.net/sessiones?retryWrites=true&w=majority',
                mongoOptions: advancedOptions
            }),
            secret: 'secret',
            resave: false,
            saveUninitialized: false
        });

        return sessionConfig;
    }
}

module.exports = new MongoAtlasStore();