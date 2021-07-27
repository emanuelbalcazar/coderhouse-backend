const session = require('express-session');
const redis = require('redis')
const client = redis.createClient();
const RedisStore = require('connect-redis')(session)

class RedisStorage {
    constructor() {} 

    getSession() {
        let sessionConfig = session({
            store: new RedisStore({
                host: 'localhost',
                port: 6379,
                client: client,
                ttl: 300
            }),
            secret: 'secret',
            resave: false,
            saveUninitialized: false
        });

        return sessionConfig;
    }
}

module.exports = new RedisStorage();