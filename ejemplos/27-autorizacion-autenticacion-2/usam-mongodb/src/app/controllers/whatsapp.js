const MongoRepository = require('../repositories/mongoRepository');
const WhatsApp = require('../models/whatsapps');
const stopWords = require('../stopwords/stopwords.json').stopwords;

/**
 * @class VipController
 * @extends {MongoRepository}
 */
class WhatsAppController extends MongoRepository {

    /**
     * Creates an instance of VipController.
     * @memberof VipController
     */
    constructor() {
        super(WhatsApp);
    }

    words(filter, callback) {
        var words = {
            negative: {},
            neutral: {},
            positive: {}
        };
        WhatsApp.find({
            message: new RegExp(filter, 'i'),
            sentiment: {
                $lte: -0.3
            }
        }).lean().exec(function (err, res) {
            if (err) {
                return callback(err);
            }
            for (var i = 0; i < res.length; i++) {
                var tokens = res[i].cleanMessage.split(',');
                for (var j = 0; j < tokens.length; j++) {
                    if (!words.negative[tokens[j]]) {
                        words.negative[tokens[j]] = 0;
                    }
                    words.negative[tokens[j]]++;
                }
            }
            WhatsApp.find({
                message: new RegExp(filter, 'i'),
                sentiment: {
                    $gt: -0.3,
                    $lte: 0.3
                }
            }).lean().exec(function (err, res) {
                if (err) {
                    return callback(err);
                }
                for (var i = 0; i < res.length; i++) {
                    var tokens = res[i].cleanMessage.split(',');
                    for (var j = 0; j < tokens.length; j++) {
                        if (!words.neutral[tokens[j]]) {
                            words.neutral[tokens[j]] = 0;
                        }
                        words.neutral[tokens[j]]++;
                    }
                }
                WhatsApp.find({
                    message: new RegExp(filter, 'i'),
                    sentiment: {
                        $gt: 0.3
                    }
                }).lean().exec(function (err, res) {
                    if (err) {
                        return callback(err);
                    }
                    for (var i = 0; i < res.length; i++) {
                        var tokens = res[i].cleanMessage.split(',');
                        for (var j = 0; j < tokens.length; j++) {
                            if (!words.positive[tokens[j]]) {
                                words.positive[tokens[j]] = 0;
                            }
                            words.positive[tokens[j]]++;
                        }
                    }
                    callback(null, words);
                });
            });
        });
    }

    wordsVis(callback) {
        var words = {
            title: {
                label: 'WhatsApp',
                color: 'gray'
            },
            filter: [{
                label: 'Positive',
                color: 'gray'
            }, {
                label: 'Neutral',
                color: 'gray'
            }, {
                label: 'Negative',
                color: 'gray'
            }],
            negative: [],
            neutral: [],
            positive: []
        };

        WhatsApp.find({
            sentiment: {
                $lte: -0.3
            }
        }).lean().exec(function (err, res) {
            let tempNeg = [];
            if (err) {
                return callback(err);
            }

            for (let i = 0; i < res.length; i++) {
                var tokens = res[i].cleanMessage.split(',');
                for (var j = 0; j < tokens.length; j++) {
                    if (!stopWords.includes(tokens[j].toLowerCase())) {
                        tempNeg.push(tokens[j])
                    }
                }
            }
            for (var j = 0; j < tempNeg.length; j++) {
                let result = words.negative.findIndex(value => value.label === tempNeg[j]);
                if (result < 0) {
                    words.negative.push({
                        label: tempNeg[j],
                        color: 'red',
                        value: 1
                    })
                } else {
                    words.negative[result].value++;
                }
            }
            WhatsApp.find({
                sentiment: {
                    $gt: -0.3,
                    $lte: 0.3
                }
            }).lean().exec(function (err, res) {
                let tempNeu = [];
                if (err) {
                    return callback(err);
                }
                for (let i = 0; i < res.length; i++) {
                    var tokens = res[i].cleanMessage.split(',');
                    for (var j = 0; j < tokens.length; j++) {
                        if (!stopWords.includes(tokens[j].toLowerCase())) {
                            tempNeu.push(tokens[j])
                        }
                    }
                }

                for (var j = 0; j < tempNeu.length; j++) {
                    let result = words.neutral.findIndex(value => value.label === tempNeu[j]);
                    if (result < 0) {
                        words.neutral.push({
                            label: tempNeu[j],
                            color: 'yellow',
                            value: 1
                        })
                    } else {
                        words.neutral[result].value++;
                    }
                }

                WhatsApp.find({
                    sentiment: {
                        $gt: 0.3
                    }
                }).lean().exec(function (err, res) {
                    let tempPos = [];
                    if (err) {
                        return callback(err);
                    }
                    for (let i = 0; i < res.length; i++) {
                        var tokens = res[i].cleanMessage.split(',');
                        for (var j = 0; j < tokens.length; j++) {
                            if (!stopWords.includes(tokens[j].toLowerCase())) {
                                tempPos.push(tokens[j])
                            }
                        }
                    }
                    for (var j = 0; j < tempPos.length; j++) {
                        let result = words.positive.findIndex(value => value.label === tempPos[j]);
                        if (result < 0) {
                            words.positive.push({
                                label: tempPos[j],
                                color: 'green',
                                value: 1
                            })
                        } else {
                            words.positive[result].value++;
                        }

                    }

                    const LIMIT = 50;

                    words.negative = words.negative.sort(sortDesc);
                    words.neutral = words.neutral.sort(sortDesc);
                    words.positive = words.positive.sort(sortDesc);

                    words.negative = words.negative.slice(0, LIMIT);
                    words.neutral = words.neutral.slice(0, LIMIT);
                    words.positive = words.positive.slice(0, LIMIT);

                    callback(null, words);
                });
            });
        });
    }
}

function sortDesc(a, b) {
    if (a.value < b.value)
        return 1;

    if (a.value > b.value)
        return -1;

    return 0;
}

module.exports = new WhatsAppController();
