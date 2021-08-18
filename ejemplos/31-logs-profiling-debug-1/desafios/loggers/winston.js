const winston = require('winston')

const logger = winston.createLogger({
    level: 'debug',
    transports : [
        new winston.transports.Console({level:'verbose'}),
        new winston.transports.File({ filename: 'info.log', level:'verbose'}),
    ]
})

module.exports = logger;