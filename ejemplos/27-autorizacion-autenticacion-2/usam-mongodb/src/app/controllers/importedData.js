const MongoRepository = require('../repositories/mongoRepository');
const ImportedData = require('../models/importedData');

/**
 * @class ImportedDataController
 * @extends {MongoRepository}
 */
class ImportedDataController extends MongoRepository {

    /**
     * Creates an instance of ImportedDataController.
     * @memberof ImportedDataController
     */
    constructor() {
        super(ImportedData);
    }
}

module.exports = new ImportedDataController();