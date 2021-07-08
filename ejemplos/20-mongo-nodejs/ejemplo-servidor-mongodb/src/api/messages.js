const Message = require('../models/message');
const MongoCRUD = require('../repository/crud');

class MessageController {

    constructor() {
        //super(Message);
    }

    async findAll() {
        return await Message.find({});
    }

    async findById(id) {
        return await Message.findById(id);
    }

    async create(data) {
        return await Message.create(data);
    }

    async update(id, data) {
        return await Message.findByIdAndUpdate(id, data);
    }

    async delete(id) {
        return await Message.findByIdAndDelete(id);
    }
}

module.exports = new MessageController();