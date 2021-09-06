const MongoRepository = require('../repositories/mongoRepository');
const Machine = require('../models/machine');

/**
 * @class MachineController
 * @extends {MongoRepository}
 */
class MachineController extends MongoRepository {

    /**
     * Creates an instance of MachineController.
     * @memberof MachineController
     */
    constructor() {
        super(Machine);
    }
}

module.exports = new MachineController();
