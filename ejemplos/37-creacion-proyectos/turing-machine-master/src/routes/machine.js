const express = require('express');
const httpStatus = require('http-status');
const controller = require('../controllers/machine');
const router = express.Router();

// create a new machine.
router.post('/machines', (req, res) => {
    controller.create(req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// get all the search queries by filters and options.
router.get('/machines', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find extraction query by id
router.get('/machines/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// update a extraction query.
router.put('/machines/:id', (req, res) => {
    controller.update(req.params.id, req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// delete a extraction query.
router.delete('/machines/:id', (req, res) => {
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
