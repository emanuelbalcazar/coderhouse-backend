const DaoException = require('../errors/DaoException');

class IMessageDAO {

    constructor() { }

    async create(data) {
        throw new DaoException('falta implementar create()');
    }

    async findById(id) {
        throw new DaoException('falta implementar findById()');
    }

    async findAll() {
        throw new DaoException('falta implementar findAll()');
    }

    async update(id, toUpdate) {
        throw new DaoException('falta implementar update()');
    }

    async remove(id) {
        throw new DaoException('falta implementar remove()');
    }
}

module.exports = IMessageDAO;