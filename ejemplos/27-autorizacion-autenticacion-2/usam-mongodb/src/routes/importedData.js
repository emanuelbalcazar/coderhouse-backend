const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const controller = require('../app/controllers/importedData');

const config = require('../config/configuration');
const rabbitmq = require('../rabbitmq/rabbitmq-client');

// create a new imported data.
router.post('/imported/data', (req, res) => {
    let data = req.body;
    data.status = 'pending';
    data.publishDate = new Date(data.publishDate).toLocaleString();

    data.reactions = data.reactions.map(reaction => {   // delete innecesary data
        delete reaction.icon;
        delete reaction.rating;
        delete reaction.name;
        return reaction;
    });

    controller.create(data, (error, result) => {
        if (error)
            return defaultCallback(res, error);

        rabbitmq.sendToQueue(config.RABBITMQ_QUEUE_DATA_EXTRACTED, data, true, (error, published) => {
            return defaultCallback(res, error, published);
        });
    });
});

// get all imported data.
router.get('/imported/data', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find imported data by id
router.get('/imported/data/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// delete a imported data.
router.delete('/imported/data/:id', (req, res) => {
    controller.remove(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

function defaultCallback(res, error, response) {
    if (error)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);

    return res.send(response);
}

module.exports = router;
