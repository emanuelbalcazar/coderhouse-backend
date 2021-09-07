const IMessageDAO = require('./IMessageDAO');
const Message = require('../models/message');
const MessageDTO = require('../dto/messageDTO');

class MessageMongoDAO extends IMessageDAO {

    constructor() {
        super();
    }

    async create(data) {
        return await Message.create(data);
    }

    async findById(id) {
        let message = await Message.findById(id);
        return new MessageDTO(message);
    }

    async findAll() {
        let messages = await Message.find();
        return messages.map(m => new MessageDTO(m));
    }

    async update(id, toUpdate) {
        return await Message.findByIdAndUpdate(id, toUpdate);
    }

    async remove(id) {
        return await Message.findByIdAndDelete(id);
    }
}

module.exports = MessageMongoDAO;