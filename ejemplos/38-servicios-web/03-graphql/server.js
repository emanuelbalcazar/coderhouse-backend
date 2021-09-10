//https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1

var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
//https://graphql.org/graphql-js/basic-types/
var schema = buildSchema(`
    type Query {
        message: String,
        messages: [String],
        number: Int,
        numbers: [Int],
        course(id: Int!): Course
        courseByTopic(topic: String): [Course]
        courses: [Course],
        saludo(nombre: String!): String,
        articulos: [Articulo]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course,
        guardarArticulo(titulo: String!, texto: String!, autor: String!): Articulo
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    type Articulo {
        titulo: String,
        texto: String,
        autor: String
    }    
`);

var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]

var articulos = [];

var getCourseById = function (args) {
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

var getCoursesByTopic = function (args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

var getAllCourses = function () {
    return coursesData
}

var updateCourseTopic = function ({ id, topic }) {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    });
    return coursesData.filter(course => course.id === id)[0];
}

var saludo = function ({ nombre }) {
    return 'Bienvenido ' + nombre;
}

var guardarArticulo = function ({ titulo, texto, autor }) {
    let articulo = { titulo, texto, autor };
    articulos.push(articulo);
    return articulo;
}

// Root resolver
var root = {
    message: () => 'Hola Mundo!',
    messages: () => 'Hola Mundo!'.split(' '),
    number: () => 123,
    numbers: () => [1, 2, 3],
    course: getCourseById,
    courseByTopic: getCoursesByTopic,
    courses: getAllCourses,
    updateCourseTopic: updateCourseTopic,
    saludo: saludo,
    articulos: () => articulos,
    guardarArticulo: guardarArticulo
};
// Create an express server and a GraphQL endpoint
var app = express();

app.use(express.static('public'))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

const PORT = 8080
app.listen(PORT, () => console.log(`Express GraphQL Server Now Running On http://localhost:${PORT}/graphql`));
