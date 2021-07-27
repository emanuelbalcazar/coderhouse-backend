const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const account = require('../app/controllers/account');

// register a new user.
router.post('/register', function (req, res) {
    account.register(req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

function defaultCallback(res, error, result) {
    if (error)
        return res.status(httpStatus.UNAUTHORIZED).send(error);

    return res.status(httpStatus.OK).send(result);
}

module.exports = router;
