const express = require('express');
const httpStatus = require('http-status');
const controller = require('../app/controllers/extractionResult');
const router = express.Router();

// create a new extraction result.
router.post('/extraction/results', (req, res) => {
    controller.create(req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// get all the extraction results by filters and options.
router.get('/extraction/results', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find extraction result by id.
router.get('/extraction/results/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// delete a extraction result.
router.delete('/extraction/results/:id', (req, res) => {
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
