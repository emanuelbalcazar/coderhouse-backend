const express = require('express');
const httpStatus = require('http-status');
const stopword = require('stopword');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const controller = require('../app/controllers/whatsapp');
const router = express.Router();
const helper = require('../app/helpers/sentimentalAnalysisHelper');

// create a new user whatsapp.
router.post('/whatsapps', (req, res) => {
    var messages = [];
    var documentsToSentiments = {};
    let cantBody = Object.keys(req.body).length;
    if (req.body) {
        for (var i = 0; i < cantBody; i++) {
            req.body[i].cleanMessage = stopword.removeStopwords(tokenizer.tokenize(req.body[i].message.normalize('NFD').replace(/[\u0300-\u036f]/g, "")), stopword.pt);
            var message = req.body[i].cleanMessage.join(' ');
            if (!message) {
                continue;
            }
            if (messages.indexOf(message) == -1) {
                messages.push(message);
            }
            if (!documentsToSentiments[message]) {
                documentsToSentiments[message] = [];
            }
            documentsToSentiments[message].push(req.body[i]);
        }
    }
    console.log("1 ===================");
    helper.sentiment(messages, 'pt', function (err, sentiments) {
        console.log("2 ===================");
        if (err) {
            defaultCallback(res, err);
            return;
        }
        var docs = [];
        for (var i = 0; i < sentiments.length; i++) {
            for (var j = 0; j < documentsToSentiments[sentiments[i].doc].length; j++) {
                documentsToSentiments[sentiments[i].doc][j].sentiment = sentiments[i].sentiment;
                docs.push(documentsToSentiments[sentiments[i].doc][j]);
            }
        }
        console.log("3 ===================");
        controller.create(docs, (error, result) => {
            return defaultCallback(res, error, result);
        });
    });
});


// get all user whatsapps.
router.get('/whatsapps', (req, res) => {
    controller.searchByPage(req.filters, req.options, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// create a new user whatsapp.
router.get('/whatsapps/words', (req, res) => {
    controller.words(req.filters.message, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

router.get('/whatsapps/wordsvis', (req, res) => {
    controller.wordsVis((error, result) => {
        return defaultCallback(res, error, result);
    });
});

// find a user whatsapp by id
router.get('/whatsapps/:id', (req, res) => {
    controller.findById(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// update a user whatsapp.
router.put('/whatsapps/:id', (req, res) => {
    controller.update(req.params.id, req.body, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

// delete a user whatsapp.
router.delete('/whatsapps/:id', (req, res) => {
    controller.remove(req.params.id, (error, result) => {
        return defaultCallback(res, error, result);
    });
});

router.post('/whatsapps/targetAndType', (req, res) => {
    //console.log(req.body)
    defaultCallback(res, null, {
        target: req.body.target,
        type: req.body.sourceType
    });
});

function defaultCallback(res, error, response) {
    if (error)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);

    return res.send(response);
}

module.exports = router;
