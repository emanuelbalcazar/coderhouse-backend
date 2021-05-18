class Database {

    constructor() { }

    async store(data) {
        try {
            console.log('> database store:', data);
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Database();