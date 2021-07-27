const MongoRepository = require('../repositories/mongoRepository');
const Vip = require('../models/vip');

/**
 * @class VipController
 * @extends {MongoRepository}
 */
class VipController extends MongoRepository {

    /**
     * Creates an instance of VipController.
     * @memberof VipController
     */
    constructor() {
        super(Vip);
    }
}

module.exports = new VipController();
