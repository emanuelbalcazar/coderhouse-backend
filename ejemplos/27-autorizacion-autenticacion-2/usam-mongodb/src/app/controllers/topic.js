const MongoRepository = require('../repositories/mongoRepository');
const Topic = require('../models/topic');

/**
 * @class TopicController
 * @extends {MongoRepository}
 */
class TopicController extends MongoRepository {

    /**
     * Creates an instance of TopicController.
     * @memberof TopicController
     */
    constructor() {
        super(Topic);
    }
}

module.exports = new TopicController();
