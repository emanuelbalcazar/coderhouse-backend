const MongoRepository = require('../repositories/mongoRepository');
const ExtractionResult = require('../models/extractionResult');

/**
 * @class ExtractionResultController
 * @extends {MongoRepository}
 */
class ExtractionResultController extends MongoRepository {

    /**
     * Creates an instance of ExtractionResultController.
     * @memberof ExtractionResultController
     */
    constructor() {
        super(ExtractionResult);
    }
}

module.exports = new ExtractionResultController();