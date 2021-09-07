class MessageDTO {

    constructor(messageData) {
        this.id = messageData._id;
        this.text = messageData.text;
        this.author = messageData.user;
        this.timestamp = messageData.timestamp;
    }

    getId() {
        return this.id;
    }

    getText() {
        return this.text;
    }

    getAuthor() {
        return this.author;
    }

    getTimestamp() {
        return this.timestamp
    }
}

module.exports = MessageDTO;