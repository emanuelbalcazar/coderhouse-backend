const IDao = require('../IDao');
const mongoose = require('mongoose');
const config = require('../../config/config');

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
        return await mongoose.connection.db.collection(this.collectionName).findOne({ _id: id });
    }

    async find(query = {}) {
        return await mongoose.connection.db.collection(this.collectionName).find(query).toArray();
    }

    async update(id, data) {
        return await mongoose.connection.db.collection(this.collectionName).findOneAndUpdate({ _id: id }, data);
    }

    async delete(id) {
        return await mongoose.connection.db.collection(this.collectionName).findOneAndDelete({ _id: id });
    }
}

module.exports = new MongoDBDao();