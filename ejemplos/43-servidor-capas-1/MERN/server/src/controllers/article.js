const daoFactory = require('../dao/DAOFactory');
const config = require('../config/config');

class ArticleController {

    constructor() {
        this.articleDao = daoFactory.getPersistence('article', config.PERSISTENCE);
    }

    async find(query = {}) {
        return await this.articleDao.find(query);
    }

    async create(data) {
        return await this.articleDao.create(data);
    }

    async findById(id) {
        return await this.articleDao.findById(id);
    }

    async update(id, data) {
        return await this.articleDao.update(id, data);
    }

    async delete(id) {
        return await this.articleDao.delete(id);
    }
}

module.exports = new ArticleController();