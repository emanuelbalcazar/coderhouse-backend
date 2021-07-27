const express = require('express');
const httpStatus = require('http-status');
const controller = require('../app/controllers/topic');
const router = express.Router();

router.post('/topics', (req, res) => {
    controller.create(req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

router.get('/topics', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

router.get('/topics/all', (req, res) => {
    controller.findAll((error, result) => {
        return defaultCallback(res, error, result);
    });
});

router.get('/topics/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

router.put('/topics/:id', (req, res) => {
    controller.update(req.params.id, req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

router.delete('/topics/:id', (req, res) => {
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
