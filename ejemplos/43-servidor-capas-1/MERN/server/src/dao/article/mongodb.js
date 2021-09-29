const IDao = require('../IDao');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const config = require('../../config/config');
const ArticleDTO = require('../../dto/article.dto');
class MongoDBDao extends IDao {

    constructor() {
        super();
        this.collectionName = 'articles';
        this.connection = mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async create(data) {
        return await mongoose.connection.db.collection(this.collectionName).insertOne(data);
    }

    async findById(id) {
        let article = await mongoose.connection.db.collection(this.collectionName).findOne({ '_id': ObjectId(id) });
        return new ArticleDTO(article._id, article.title, article.text, article.author);
    }

    async find(query = {}) {
        return await mongoose.connection.db.collection(this.collectionName).find(query).toArray();
    }

    async update(id, data) {
        return await mongoose.connection.db.collection(this.collectionName).findOneAndUpdate({ '_id': ObjectId(id) }, { $set: data });
    }

    async delete(id) {
        return await mongoose.connection.db.collection(this.collectionName).findOneAndDelete({ '_id': ObjectId(id) });
    }
}

module.exports = new MongoDBDao();