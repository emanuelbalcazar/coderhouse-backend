const MongoRepository = require('../repositories/mongoRepository');
const Group = require('../models/group');

const neo4j = require('./neo4j');

/**
 * @class GroupController
 * @extends {MongoRepository}
 */
class GroupController extends MongoRepository {

    /**
     * Creates an instance of GroupController.
     * @memberof GroupController
     */
    constructor() {
        super(Group);
    }

    create(data, callback) {
        Group.create(data, (error, result) => {
            let group = JSON.parse(JSON.stringify(result));
            neo4j.merge('Group', group, (error, result) => {
                return callback(error, result);
            });
        });
    }
}

module.exports = new GroupController();
