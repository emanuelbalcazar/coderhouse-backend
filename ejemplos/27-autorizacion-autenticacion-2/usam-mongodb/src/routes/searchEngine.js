// search.js - searches proxy module.
const express = require('express');
const httpStatus = require('http-status');
const controller = require('../app/controllers/searchEngine');
const router = express.Router();

router.get('/search/engines', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// run a simple search.
router.post('/search/engines/run', (req, res) => {
    controller.search(req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

function defaultCallback(res, error, response) {
    if (error)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);

    return res.send(response);
}

module.exports = router;
