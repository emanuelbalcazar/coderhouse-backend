const request = require('request');
const config = require('../../config/configuration');

class Neo4jController {

    constructor() {

    }

    merge(label, properties, callback) {
        request({
            method: 'POST',
            url: config.NEO4j_MODULE + '/nodes',
            form: { label: label, condition: properties },
            json: true
        }, function (error, response, body) {
            if (error)
                return callback(error);

            return callback(false, body);
        });
    }

    update(id, properties, callback) {
        request({
            method: 'PUT',
            url: config.NEO4j_MODULE + '/nodes/' + id,
            form: properties,
            json: true
        }, function (error, response, body) {
            if (error)
                return callback(error);

            return callback(false, body);
        });
    }

    delete(id, callback) {
        request({
            method: 'DELETE',
            url: config.NEO4j_MODULE + '/nodes/' + id,
            json: true
        }, function (error, response, body) {
            if (error)
                return callback(error);

            return callback(false, body);
        });
    }

    searchByPage(filters = {}, page = 1, limit = 10, callback) {
        request({
            method: 'GET',
            url: config.NEO4j_MODULE + '/nodes?filters=' + JSON.stringify(filters) + '&page=' + page + '&limit=' + limit,
            json: true
        }, function (error, response, body) {
            if (error)
                return callback(error);

            return callback(false, body);
        });
    }
}

module.exports = new Neo4jController();
