// declare HOST and PORT.
module.exports.HOST = 'http://localhost';
module.exports.PORT = 8005;

// database URL
module.exports.MONGO_URL = 'mongodb://localhost:27017/usam-web';

// rabbitmq api ? necesario???
module.exports.RABBITMQ_URL = 'amqp://localhost:5672';
module.exports.RABBITMQ_QUEUE_DATA_EXTRACTED = 'data_extracted';

// external API's.
module.exports.SEARCH_ENGINE = 'http://localhost:2002/api';
module.exports.CRAWL_EXTRACTORS = 'http://localhost:2003/api';
module.exports.NEO4j_MODULE = 'http://localhost:8004/api';
