const express = require('express');
const httpStatus = require('http-status');
const controller = require('../app/controllers/vip');
const router = express.Router();

// create a new user vip.
router.post('/vips', (req, res) => {
    controller.create(req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// get all user vips.
router.get('/vips', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find a user vip by id
router.get('/vips/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// update a user vip.
router.put('/vips/:id', (req, res) => {
    controller.update(req.params.id, req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// delete a user vip.
router.delete('/vips/:id', (req, res) => {
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
