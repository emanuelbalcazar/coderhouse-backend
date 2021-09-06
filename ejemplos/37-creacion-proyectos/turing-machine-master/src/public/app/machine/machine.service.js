angular.module('app').service('machineSrv', ['$http', 'API', machineSrv]);

function machineSrv($http, API) {

    var service = {
        searchByPage: searchByPage,
        save: save,
        remove: remove,
        findById: findById,
        update: update
    };

    return service;

    function save(data, callback) {
        $http.post(API + '/machines', data).then(function (result) {
            return callback(null, result.data);
        },
        function (error) {
            return callback(error);
        });
    }

    function searchByPage(filters, page, limit, callback) {
        $http.get(API + '/machines?filters=' + JSON.stringify(filters) + '&page=' + page + '&limit=' + limit).then(function (result) {
            return callback(null, result.data);
        },
        function (error) {
            return callback(error);
        });
    }

    function remove(id, callback) {
        $http.delete(API + '/machines/' + id).then(function (result) {
            return callback(null, result.data);
        },
        function (error) {
            return callback(error);
        });
    }

    function findById(id, callback) {
        $http.get(API + '/machines/' + id).then(function (result) {
            return callback(null, result.data);
        },
        function (error) {
            return callback(error);
        });
    }

    function update(id, data, callback) {
        $http.put(API + '/machines/' + id, data).then(function (result) {
            return callback(null, result.data);
        },
        function (error) {
            return callback(error);
        });
    }
}
