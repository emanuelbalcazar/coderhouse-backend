const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const account = require('../app/controllers/account');

// authenticate the user using username and password.
router.post('/login', function (req, res) {
    account.login(req.body.userName, req.body.password, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// service information path
router.get('/info', function (req, res) {
    let info = { name: "angular front", version: "2018-07-12", status: "active" };
    return defaultCallback(res, false, info);
});

function defaultCallback(res, error, result) {
    if (error)
        return res.status(httpStatus.UNAUTHORIZED).send(error);

    return res.status(httpStatus.OK).send(result);
}

module.exports = router;
