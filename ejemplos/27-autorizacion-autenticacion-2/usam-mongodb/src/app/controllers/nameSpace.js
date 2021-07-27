const MongoRepository = require('../repositories/mongoRepository');
const NameSpace = require('../models/nameSpace');

const neo4j = require('./neo4j');

/**
 * @class NameSpaceController
 * @extends {MongoRepository}
 */
class NameSpaceController extends MongoRepository {

    /**
     * Creates an instance of NameSpaceController.
     * @memberof NameSpaceController
     */
    constructor() {
        super(NameSpace);
    }

    create(data, callback) {
        NameSpace.create(data, (error, result) => {
            let namespace = JSON.parse(JSON.stringify(result));
            return neo4j.merge('NameSpace', namespace, callback);
        });
    }

    remove(id, callback) {
        NameSpace.remove({ _id: id }, (error) => {
            neo4j.searchByPage({ _id: id }, 1, 1, (error, result) => {
                if (error)
                    return callback(error);

                let node = result.docs[0];

                return neo4j.delete(node.id, callback);
            });
        });
    }

    update(id, data, callback) {
        NameSpace.findByIdAndUpdate(id, data, (error, result) => {
            neo4j.searchByPage({ _id: id }, 1, 1, (error, result) => {
                if (error)
                    return callback(error);

                let node = result.docs[0];
                return neo4j.update(node.id, data, callback);
            });
        });
    }
}

module.exports = new NameSpaceController();
