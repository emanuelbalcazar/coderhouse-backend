const express = require('express');
const httpStatus = require('http-status');

const controller = require('../app/controllers/nameSpace');
const router = express.Router();

// create a new nameSpace.
router.post('/nameSpaces', (req, res) => {
    controller.create(req.body, (error, result) => {
        if (error)
            return defaultCallback(res, error);

        return defaultCallback(res, error, result);
    });
});

// search nameSpaces by page.
router.get('/nameSpaces', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// get all nameSpaces.
router.get('/nameSpaces/all', (req, res) => {
    controller.findAll((error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find a nameSpace by id.
router.get('/nameSpaces/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// update a nameSpace.
router.put('/nameSpaces/:id', (req, res) => {
    controller.update(req.params.id, req.body, (error, result) => {
        if (error)
            return defaultCallback(res, error);

        return defaultCallback(res, error, result);
    });
});

// delete a nameSpace.
router.delete('/nameSpaces/:id', (req, res) => {
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
