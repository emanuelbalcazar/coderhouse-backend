const neo4j = require('../database/neo4j');

/* Cypher example */
neo4j.cypher('MATCH (n) RETURN n LIMIT {limit}', { limit: 1 })
    .then(res => {
        console.log('> cypher:', JSON.stringify(res.records));
        neo4j.close();
    });

/* Batch example */
/* neo4j.batch([
    { query: 'MATCH (n) RETURN n LIMIT {limit}', params: { limit: 1 } },
    { query: 'MATCH (n) RETURN n LIMIT {limit}', params: { limit: 2 } }
])
    .then(res => {
        console.log('> batch', JSON.stringify(res));
        neo4j.close();
    }) */

/* Query Builder example */
const builder = neo4j.query();
const query = builder.match('p', 'Person').where('p.name', 'Adam').return('p').build();
console.log(query)
