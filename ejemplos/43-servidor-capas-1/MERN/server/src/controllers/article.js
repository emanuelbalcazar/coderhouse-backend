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
        let article = await this.articleDao.findById(id);
        console.log('>>> ID', article.getId());
        return article;
    }

    async update(id, data) {
        return await this.articleDao.update(id, data);
    }

    async delete(id) {
        return await this.articleDao.delete(id);
    }
}

module.exports = new ArticleController();