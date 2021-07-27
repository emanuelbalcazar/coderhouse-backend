const request = require('request');
const MongoRepository = require('../repositories/mongoRepository');
const api = require('../../config/configuration');
const Extractor = require('../models/extractor');
const helper = require('../helpers/sentimentalAnalysisHelper');

/**
 * Manipulates and executes extractors.
 * @class ExtractorController
 * @extends {MongoRepository}
 */
class ExtractorController extends MongoRepository {

    /**
     * Creates an instance of ExtractorController.
     * @memberof ExtractorController
     */
    constructor() {
        super(Extractor);
    }

    /**
     * Send the extraction parameters to the extractor.
     * @param {Object} params
     * @param {Function} callback
     */
    extract(params, callback) {
        request({
            method: 'POST',
            url: api.CRAWL_EXTRACTORS + '/extract',
            form: params,
            json: true
        }, function (error, response, body) {
            if (params.sentimentAnalysisEnabled)
                helper.sentiment(body, 'es', callback);
            else
                return callback(error, body);
        });
    }
}

module.exports = new ExtractorController();
