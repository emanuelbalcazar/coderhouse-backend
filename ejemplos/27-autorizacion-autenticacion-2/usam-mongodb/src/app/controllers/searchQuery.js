const MongoRepository = require('../repositories/mongoRepository');
const SearchQuery = require('../models/searchQuery').model;

/**
 * @class SearchQueryController
 * @extends {MongoRepository}
 */
class SearchQueryController extends MongoRepository {

    /**
     * Creates an instance of SearchQueryController.
     * @memberof SearchQueryController
     */
    constructor() {
        super(SearchQuery);
    }

}

module.exports = new SearchQueryController();
