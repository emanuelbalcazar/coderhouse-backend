const MongoRepository = require('../repositories/mongoRepository');
const ExtractionQuery = require('../models/extractionQuery').model;

/**
 * @class SearchQueryController
 * @extends {MongoRepository}
 */
class ExtractionQueryController extends MongoRepository {

    /**
     * Creates an instance of ExtractionQueryController.
     * @memberof ExtractionQueryController
     */
    constructor() {
        super(ExtractionQuery);
    }

}

module.exports = new ExtractionQueryController();