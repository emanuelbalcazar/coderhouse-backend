const request = require('request');
const async = require('async');
const MongoRepository = require('../repositories/mongoRepository');
const SearchEngine = require('../models/searchEngine');
const api = require('../../config/configuration');
const helper = require('../helpers/sentimentalAnalysisHelper');

/**
 * @class SearchEngineController
 */
class SearchEngineController extends MongoRepository {

    /**
     * Creates an instance of SearchEngineController.
     * @memberof SearchEngineController
     */
    constructor() {
        super(SearchEngine);
    }

    /**
     * Make a search
     * @param {Object} params
     * @param {Function} callback
     */
    search(params, callback) {
        request({
            method: 'POST',
            url: api.SEARCH_ENGINE + '/search',
            form: params,
            json: true
        }, function (error, response, body) {
            if (error)
                return callback(error);
            extract(body, params.source, function (error, results) {
                if (error)
                    return callback(error);

                    console.log(params.sentimentAnalysisEnabled)
                if (params.sentimentAnalysisEnabled)
                    helper.sentiment(results, 'es', callback);
                else
                    return callback(error, results);
            });
        });
    }
}

/**
 * Send to extract every records from search results.
 * @param {Array} records
 * @param {Function} callback
 */
function extract(records, originalSource, callback) {

    async.map(records, function (record, callback) {
        // TODO: to get better!
        let extractionParams = { source: "articles", resolver: "/resolvers/news/index.js", queryParams: [{ value: record.link }] };

        request({
            method: 'POST',
            url: api.CRAWL_EXTRACTORS + '/extract',
            form: extractionParams,
            json: true
        }, function (error, response, body) {
            if (!body || body.length == 0)
                return callback("Error al ejecutar la extraccion, respuesta vacia");

            body[0].snippet = record.snippet || '';
            body[0].source = originalSource;

            return callback(error, body[0]);
        });
    }, function (error, results) {
        return callback(error, results);
    });
}

module.exports = new SearchEngineController();
