const bcrypt = require('bcryptjs');
const config = require('../../config/security');

/**
 * @class MongoRepository
 */
class MongoRepository {

    /**
     * Creates an instance of MongoRepository.
     * @param {Mongoose Model} model
     */
    constructor(model) {
        this.model = model;
    }

    /**
     * @return entity model.
     */
    getModel() {
        return this.model;
    }

    /**
     * Create a new entity.
     * @param {Object} userData
     * @param {Function} callback
     */
    create(data, callback) {
        if (data.password && !String(data.password).startsWith("$"))
            data.password = bcrypt.hashSync(data.password, config.SALT);

        this.model.create(data, (error, result) => {
            return callback(error, result);
        });
    }

    /**
     * Find entity by ID.
     * @param {Number} id
     * @param {Function} callback
     */
    findById(id, callback) {
        this.model.findOne({ _id: id }, (error, result) => {
            return callback(error, result);
        });
    }

    /**
     * Find all records
     * @param {Function} callback
     */
    findAll(callback) {
        this.model.find({}, {}, {}, callback);
    }

    /**
    * https://www.npmjs.com/package/mongoose-paginate
    * @param {Object} [query={}] criteria
    * @param {Objects} options page, select, sort, populate, lean, offset or limit.
    * @param {Function} callback
    */
    searchByPage(filters = {}, options = { page: 1, limit: 10 }, callback) {
        let keys = Object.keys(filters);
        let values = Object.values(filters);

        // use regex only with string...
        for (let i = 0; i < keys.length; i++) {
            if (typeof (values[i]) == 'string')
                filters[keys[i]] = { '$regex': filters[keys[i]], '$options': 'i' };
        }

        this.model.paginate(filters, options, (error, result) => {
            return callback(error, result);
        });
    }

    /**
     * Check if a entity exists.
     * @param {Object} [query={}]
     * @param {Function} callback
     */
    exists(query = {}, callback) {
        this.model.findOne(query, (error, result) => {
            if (error)
                return callback(error);

            return callback(false, (result != null));
        });
    }

    /**
     * Update a entity looking for it by id
     * @param {String} id mongodb id
     * @param {Object} toUpdate data to update
     * @param {Function} callback
     */
    update(id, toUpdate, callback) {
        if (toUpdate.password && !String(toUpdate.password).startsWith("$"))
            toUpdate.password = bcrypt.hashSync(toUpdate.password, config.SALT);

        this.model.findByIdAndUpdate(id, toUpdate, (error, result) => {
            return callback(error, result);
        });
    }

    /**
     * Delete a entity looking for it by id
     * @param {String} id mongodb id
     * @param {Function} callback
     */
    remove(id, callback) {
        this.model.remove({ _id: id }, (error) => {
            return callback(error, true);
        });
    }
}

module.exports = MongoRepository;
