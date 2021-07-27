const express = require('express');
const httpStatus = require('http-status');
const controller = require('../app/controllers/group');
const router = express.Router();

// create a new group.
router.post('/groups', (req, res) => {
    controller.create(req.body, (error, result) => {
        if (error)
            return defaultCallback(res, error);

        return defaultCallback(res, error, result);
    });
});

// search groups by page.
router.get('/groups', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// get all groups.
router.get('/groups/all', (req, res) => {
    controller.findAll((error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find a group by id.
router.get('/groups/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// update a group.
router.put('/groups/:id', (req, res) => {
    controller.update(req.params.id, req.body, (error, result) => {
        if (error)
            return defaultCallback(res, error);

        return defaultCallback(res, error, result);
    });
});

// delete a group.
router.delete('/groups/:id', (req, res) => {
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
