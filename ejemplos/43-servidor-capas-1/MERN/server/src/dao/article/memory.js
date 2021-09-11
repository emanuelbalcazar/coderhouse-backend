const IDao = require('../IDao');
const { v4: uuidv4 } = require('uuid');

class MemoryDao extends IDao {

    constructor() {
        super();
        this.articles = [];
    }

    async create(data) {
        let article = { ...data };
        article.id = uuidv4();
        this.articles.push(article);
        return article;
    }

    async findById(id) {
        return this.articles.find(article => article.id == id);
    }

    async find(query = {}) {
        return this.articles;
    }

    async update(id, data) {
        let index = this.articles.findIndex(a => a.id === id);
        this.articles.splice(index, 1, data);
        return this.articles.find(article => article.id == id);
    }

    async delete(id) {
        let index = this.articles.findIndex(a => a.id === id);
        this.articles.splice(index, 1);
        return this.articles;
    }
}

module.exports = new MemoryDao()