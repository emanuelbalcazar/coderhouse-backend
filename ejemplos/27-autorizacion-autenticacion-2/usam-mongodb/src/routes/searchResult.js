const express = require('express');
const httpStatus = require('http-status');
const controller = require('../app/controllers/searchResult');
const router = express.Router();

// create a new search result.
router.post('/search/results', (req, res) => {
    controller.create(req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// get all the search results by filters and options.
router.get('/search/results', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find search result by id.
router.get('/search/results/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// returns a search result as a graph.
router.get('/search/results/graph/:id', (req, res) => {
    controller.toGraph(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// delete a search result.
router.delete('/search/results/:id', (req, res) => {
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
