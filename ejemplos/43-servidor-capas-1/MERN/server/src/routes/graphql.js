const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const controller = require('../controllers/article');

var schema = buildSchema(`
    type Article {
        id: String,
        title: String,
        text: String,
        author: String
    },
    type Query {
        articles: [Article]
    },
    type Mutation {
        storeArticle(title: String!, text: String!, author: String!): Article,
        articleById(id: String): Article,
        deleteArticleById(id: String): Article
    },
`);

const storeArticle = async function ({ title, text, author }) {
    let article = { title, text, author };
    return await controller.create(article);
};

const articles = async function () {
    return await controller.find();
}

const articleById = async function ({ id }) {
    return await controller.findById(id);
}

const deleteArticleById = async function ({id}) {
    return await controller.delete(id);
}

const root = {
    articles: articles,
    storeArticle: storeArticle,
    articleById: articleById,
    deleteArticleById: deleteArticleById
};

module.exports.start = function () {
    return graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    });
}