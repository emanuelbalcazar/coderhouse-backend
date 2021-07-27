const express = require('express');
const httpStatus = require('http-status');
const controller = require('../app/controllers/user');
const router = express.Router();

// create a new user.
router.post('/users', (req, res) => {
    controller.create(req.body, (error, result) => {
        if (error)
            return defaultCallback(res, error);

        return defaultCallback(res, error, result);
    });
});

// search users by page.
router.get('/users', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find a user by id
router.get('/users/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// update a user.
router.put('/users/:id', (req, res) => {
    controller.update(req.params.id, req.body, (error, result) => {
        if (error)
            return defaultCallback(res, error);

        return defaultCallback(res, error, result);
    });
});

// delete a user.
router.delete('/users/:id', (req, res) => {
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
