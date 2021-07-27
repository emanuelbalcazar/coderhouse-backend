const async = require('async');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

/**
 * Send to analyze the feeling of the extracted texts.
 * @param {Array} results
 * @param {Function} callback
 */
module.exports.sentiment = (results, language = 'es', callback) => {
    async.mapSeries(
        results,
        function (record, callback) {
            //require('dotenv').config({ silent: true }); //  optional

            var nlu = new NaturalLanguageUnderstandingV1({
                // note: if unspecified here, credentials are pulled from environment properties:
                // NATURAL_LANGUAGE_UNDERSTANDING_USERNAME &  NATURAL_LANGUAGE_UNDERSTANDING_PASSWORD
                username: '0f703f69-4b8b-4e2a-97bf-432eec6044eb',
                password: 'cWMDXid0XDxX',
                version: '2018-03-19',
                url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
            });

            //console.log(record.fullText)
            // record
            if (record.fullText)
                text = record.fullText;
            else
                text = (typeof record == 'string') ? record : 'Sin texto';

            var options = {
                "text": text,
                "features": {
                    "sentiment": {}
                },
                "language": language
            };

            nlu.analyze(options, function (err, res) {
                if (err) {
                    return callback(err);
                }

                if (record.fullText) {
                    record.sentiment = res.sentiment.document.score;
                    return callback(false, record);
                } else {
                    return callback(null, { doc: record, sentiment: res.sentiment.document.score });
                }
                //record.sentiment = res.sentiment.document.score;
                //return callback(false, record);
            });
        },
        callback
    );
};
