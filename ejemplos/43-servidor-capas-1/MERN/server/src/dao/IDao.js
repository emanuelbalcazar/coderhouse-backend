class IDao {

    constructor() { }

    async create(data) {
        throw new Error('create() must be implemented');
    }

    async findById(id) {
        throw new Error('findById() must be implemented');
    }

    async find(query) {
        throw new Error('find() must be implemented');
    }

    async update(id, data) {
        throw new Error('update() must be implemented');
    }

    async delete(id) {
        throw new Error('delete() must be implemented');
    }
}

module.exports = IDao;