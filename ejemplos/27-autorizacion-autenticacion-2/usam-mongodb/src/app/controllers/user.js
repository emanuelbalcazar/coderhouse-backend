const MongoRepository = require('../repositories/mongoRepository');
const User = require('../models/user');

const bcrypt = require('bcryptjs');
const config = require('../../config/security');
const neo4j = require('./neo4j');

/**
 * @class UserController
 * @extends {MongoRepository}
 */
class UserController extends MongoRepository {

    /**
     * Creates an instance of UserController.
     * @memberof UserController
     */
    constructor() {
        super(User);
    }

    create(data, callback) {
        if (data.password && !String(data.password).startsWith("$"))
            data.password = bcrypt.hashSync(data.password, config.SALT);

        User.create(data, (error, result) => {
            let user = JSON.parse(JSON.stringify(result));
            delete user.password;
            neo4j.merge('User', user, (error, result) => {
                return callback(error, result);
            });
        });
    }

    /**
     * Find user by id and populate groups.
     * @param {String} id
     * @param {Function} callback
     */
    findById(id, callback) {
        User.findById(id).populate('groups').exec((err, result) => {
            return callback(err, result);
        });
    }
}

module.exports = new UserController();
