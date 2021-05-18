class Database {

    constructor() { }

    async store(data) {
        console.log('> database store:', data);
        return data;
    }
}

module.exports = new Database();