const fs = require('fs');

class File {

    constructor() { }

    async store(data) {
        try {
            console.log('> file store:', data);
            fs.appendFileSync('./database.txt', data + '\n');
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new File();