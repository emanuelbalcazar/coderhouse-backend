const MessageDAO = require('../dao/MessageMongoDao');

class MessageController {

    constructor() {
        this.messageDAO = new MessageDAO();
    }

    async create(data) {
        return await this.messageDAO.create(data);
    }

    async findById(id) {
        return await this.messageDAO.findById(id);
    }

    async findAll() {
        return await this.messageDAO.findAll();
    }

    async update(id, toUpdate) {
        return await this.messageDAO.update(id, toUpdate);
    }

    async remove(id) {
        return await this.messageDAO.remove(id);
    }
}

module.exports = new MessageController();