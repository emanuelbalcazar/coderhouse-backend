const async = require('async');
const shortid = require('shortid');

// controllers
const groupCtrl = require('../../app/controllers/group');
const userCtrl = require('../../app/controllers/user');
const searchEngineCtrl = require('../../app/controllers/searchEngine');
const extractorCtrl = require('../../app/controllers/extractor');
const searchQueryCtrl = require('../../app/controllers/searchQuery');
const extractionQueryCtrl = require('../../app/controllers/extractionQuery');
const vipCtrl = require('../../app/controllers/vip');

// files with data.
var groups = require('./files/groups.json').groups;
var users = require('./files/users.json').users;
var engines = require('./files/searchEngines.json').engines;
var extractors = require('./files/extractors.json').extractors;
var searchQueries = require('./files/searchQueries.json').queries;
var extractionQueries = require('./files/extractionQueries.json').queries;
var vips = require('./files/vips.json').vips;

// execute async tasks in series.
async.waterfall([
    connect,
    storeGroups,
    storeUsers,
    storeSearchEngines,
    storeExtractors,
    storeSearchQueries,
    storeExtractionQueries,
    storeVips
], function (error, results) {
    if (error) {
        console.error('\n[Seeder] - Ocurrio un error al realizar la migracion', error);
        process.exit(-1);
    }

    console.log('\n[Seeder] - Las migraciones se ejecutaron correctamente');
    process.exit(0);
});

// ------------------------------------ All Functions ----------------------------------------------//

// wait a certain time.
function wait(callback) {
    setTimeout(() => {
        callback(false);
    }, 1000);
}

// start the connection to mongodb.
function connect(callback) {
    const connector = require('../connector');
    wait(callback);
    console.log('[Seeder] - Iniciando la migracion de datos...');
}

// create and store groups
function storeGroups(callback) {
    var count = 0;

    async.each(groups, (groupData, callback) => {
        groupCtrl.exists({ name: groupData.name }, (err, exists) => {
            if (!exists) {
                count++;
                groupData.code = shortid.generate();
                groupCtrl.create(groupData, (err, created) => {
                    if (err)
                        return callback(err);

                    return callback(false, created);
                });
            } else {
                callback(false);
            }
        })
    }, function (error) {
        console.log("\n > Se crearon " + count + " grupos nuevos");
        return callback(error);
    });
}

// create and store users.
function storeUsers(callback) {
    var count = 0;

    async.each(users, (userData, callback) => {
        userCtrl.exists({ userName: userData.userName }, (err, exists) => {
            if (!exists) {
                count++;
                userCtrl.create(userData, (err, created) => {
                    if (err)
                        return callback(err);

                        return callback(false, created);
                    });
            } else {
                callback(false);
            }
        })
    }, function (error) {
        console.log("\n > Se crearon " + count + " usuarios nuevos");
        return callback(error);
    });
}

// create and store search engines.
function storeSearchEngines(callback) {
    var count = 0;
    async.each(engines, (engine, callback) => {
        searchEngineCtrl.exists({ source: engine.source }, (err, exists) => {
            if (!exists) {
                count++;
                searchEngineCtrl.create(engine, (err, created) => {
                    return callback(err, created);
                });
            } else {
                return callback(false);
            }
        });
    }, function (error) {
        console.log("\n > Se crearon " + count + " motores de búsqueda nuevos");
        return callback(error);
    });
}

// create and store extractors.
function storeExtractors(callback) {
    var count = 0;
    async.each(extractors, (extractor, callback) => {
        extractorCtrl.exists({ source: extractor.source }, (err, exists) => {
            if (!exists) {
                count++;
                extractorCtrl.create(extractor, (err, created) => {
                    return callback(err, created);
                });
            } else {
                return callback(false);
            }
        });
    }, function (error) {
        console.log("\n > Se crearon " + count + " extractores nuevos");
        return callback(error);
    });
}

// create and store search queries.
function storeSearchQueries(callback) {
    var count = 0;
    async.each(searchQueries, (query, callback) => {
        searchQueryCtrl.exists({ name: query.name }, (err, exists) => {
            if (!exists) {
                count++;
                searchQueryCtrl.create(query, (err, created) => {
                    return callback(err, created);
                });
            } else {
                return callback(false);
            }
        });
    }, function (error) {
        console.log("\n > Se crearon " + count + " consultas de busqueda nuevas");
        return callback(error);
    });
}

// create and store search queries.
function storeExtractionQueries(callback) {
    var count = 0;
    async.each(extractionQueries, (query, callback) => {
        extractionQueryCtrl.exists({ name: query.name }, (err, exists) => {
            if (!exists) {
                count++;
                extractionQueryCtrl.create(query, (err, created) => {
                    return callback(err, created);
                });
            } else {
                return callback(false);
            }
        });
    }, function (error) {
        console.log("\n > Se crearon " + count + " consultas de extracción nuevas");
        return callback(error);
    });
}

function storeVips(callback) {
    var count = 0;
    async.each(vips, (vip, callback) => {
        vipCtrl.exists({ name: vip.name }, (err, exists) => {
            if (!exists) {
                count++;
                vipCtrl.create(vip, (err, created) => {
                    return callback(err, created);
                });
            } else {
                return callback(false);
            }
        });
    }, function (error) {
        console.log("\n > Se crearon " + count + " vips nuevos");
        return callback(error);
    });
}
