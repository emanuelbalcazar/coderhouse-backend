class StorageFactory {
    constructor() { }

    getStorage(type) {
        try {
            let storage = require(`${__dirname}/storages/${type}`);
            return storage;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new StorageFactory();