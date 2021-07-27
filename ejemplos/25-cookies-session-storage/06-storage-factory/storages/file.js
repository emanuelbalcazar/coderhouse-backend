const session = require('express-session');
const FileStore = require('session-file-store')(session);

class FileStorage {

    constructor() {}

    getSession() {
        let sessionConfig = session({
            store: new FileStore({ path: `${__dirname}/../sesiones`, ttl: 300, retries: 0 }),
            secret: 'secret',
            resave: false,
            saveUninitialized: false
        });

        return sessionConfig;
    }
}

module.exports = new FileStorage();