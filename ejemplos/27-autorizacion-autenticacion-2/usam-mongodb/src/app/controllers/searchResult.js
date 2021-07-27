const MongoRepository = require('../repositories/mongoRepository');
const SearchResult = require('../models/searchResult');
const helper = require('../helpers/searchResultHelper');

/**
 * @class SearchResultController
 * @extends {MongoRepository}
 */
class SearchResultController extends MongoRepository {

    /**
     * Creates an instance of SearchResultController.
     * @memberof SearchResultController
     */
    constructor() {
        super(SearchResult);
    }

    /**
     * Returns a search result as a graph.
     * @param {Number} id
     * @param {Function} callback
     */
    toGraph(id, callback) {
        super.findById(id, (error, searchResult) => {
            if (error)
                return callback(error);

            if (!searchResult)
                return callback('Identificador de resultado de busqueda invalido');

            let visData = helper.toVisJS(searchResult);
            callback(false, visData);
        });
    }
}

module.exports = new SearchResultController();
