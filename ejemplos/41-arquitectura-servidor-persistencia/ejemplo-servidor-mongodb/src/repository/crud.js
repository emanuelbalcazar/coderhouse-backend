class MongoCRUD {

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
     */
    async create(data) {
        return this.model.create(data);
    }

    /**
     * Find entity by ID.
     * @param {Number} id
     */
    async findById(id) {
        return this.model.findById(id);
    }

    /**
     * Find all records
     */
    async findAll() {
        return this.model.find({});
    }

    /**
     * Update a entity looking for it by id
     * @param {String} id mongodb id
     * @param {Object} toUpdate data to update
     */
    async update(id, toUpdate) {
        return this.model.findByIdAndUpdate(id, toUpdate);
    }

    /**
     * Delete a entity looking for it by id
     * @param {String} id mongodb id
     */
    async remove(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = MongoCRUD;