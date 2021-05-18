
class Controller {

    constructor() {}

    async store(data, type) {
        try {
            const module = require(`./persistence/${type}`);
            let status = module.store(data);
            return status;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = new Controller();