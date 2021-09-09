const { graphql, buildSchema } = require('graphql');

// construyo el esquema usando graphql
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// la raiz provee el resolver de cada endpoint, en este caso tenemos uno solo
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

// ejecuta una consulta en graphql
graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});
