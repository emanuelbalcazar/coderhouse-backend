const client = require('../rabbitmq/rabbitmq-client');

client.sendToQueue('data_extracted', 'hola', false, (err, res) => {
    console.log(err, res)
});
