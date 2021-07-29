const winston = require('winston')

const logger = winston.createLogger({
    level: 'warn',
    transports : [
        new winston.transports.Console({level:'verbose'}),
        new winston.transports.File({ filename: 'info.log', level:'error'}),
    ]
})

logger.log('silly', "127.0.0.1 - log silly")
logger.log('debug', "127.0.0.1 - log debug")
logger.log('verbose', "127.0.0.1 - log verbose")
logger.log('info', "127.0.0.1 - log info")
logger.log('warn', "127.0.0.1 - log warn")
logger.log('error', "127.0.0.1 - log error")

logger.info("127.0.0.1 - log info 2")
logger.warn("127.0.0.1 - log warn 2")
logger.error("127.0.0.1 - log error 2")
