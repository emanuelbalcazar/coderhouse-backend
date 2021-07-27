const amqp = require('amqplib/callback_api');
const rabbitUrl = require('../config/configuration').RABBITMQ_URL;

/**
 * @class RabbitMQClient
 */
class RabbitMQClient {

    /**
     *Creates an instance of RabbitMQClient.
     * @memberof RabbitMQClient
     */
    constructor() { }

    /**
     * Send a single message with the content given as a buffer to the specific queue named.
     * @param {String} queueName
     * @param {String} message
     * @param {Function} callback
     * @memberof RabbitMQClient
     */
    sendToQueue(queueName, message, durable = true, callback) {
        amqp.connect(rabbitUrl, (err, connection) => {
            if (err)
                return callback(err);

            connection.createConfirmChannel((err, channel) => {
                channel.assertQueue(queueName, { durable: durable }, (err, assert) => {
                    if (!assert)
                        return callback(`La cola de mensajeria "${queueName}" no existe`);

                    channel.sendToQueue(queueName, new Buffer(JSON.stringify(message)), {}, (err, ok) => {
                        connection.close((err, closed) => {
                            return callback(err, closed);
                        });
                    });
                });
            });
        });
    }
}

module.exports = new RabbitMQClient();
