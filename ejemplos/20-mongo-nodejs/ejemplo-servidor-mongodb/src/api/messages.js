const Message = require('../models/message');
const MongoCRUD = require('../repository/crud');

class MessageController extends MongoCRUD {

    constructor() {
        super(Message);
    }
}

module.exports = new MessageController();