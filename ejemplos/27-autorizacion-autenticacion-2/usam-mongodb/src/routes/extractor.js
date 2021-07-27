// extractors.js - extractors proxy module.
const express = require('express');
const httpStatus = require('http-status');
const controller = require('../app/controllers/extractor');
const router = express.Router();

// get all the extractors by filters and options.
router.get('/extractors', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

router.post('/extractors/run', (req, res) => {
    controller.extract(req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

function defaultCallback(res, error, response) {
    if (error)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);

    return res.send(response);
}

module.exports = router;
