const session = require('express-session');

const RedisStore = require('connect-redis')(session)
const redis = require('redis');

// createClient(<puerto>, <host>)
const client = redis.createClient(14899, 'redis-14899.c258.us-east-1-4.ec2.cloud.redislabs.com')

// auth(<contraseña>)
client.auth('MuyY8dyedN5PYpPqJk0H0Zn3VQQY6F2Q', (err) => {
    if (err) throw err;
});

class RedisLab {

    constructor() { }

    getSession() {
        let sessionConfig = session({
            store: new RedisStore({
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

module.exports = new RedisLab();