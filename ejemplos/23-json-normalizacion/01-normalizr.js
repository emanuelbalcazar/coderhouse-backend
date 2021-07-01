const { normalize, schema } = require('normalizr');

const blogPost = {
    "id": 1,
    "title": "My blogspot",
    "description": "Short description",
    "content": "Hello word",
    "author": {
        "id": 1,
        "name": "John Doe"
    },
    "comments": [
        {
            "id": 1,
            "author": "Rob",
            "content": "Nice post!"
        },
        {
            "id": 2,
            "author": "Jane",
            "content": "I totally agree with you"
        }
    ]
}

// defino el esquema de los usuarios (o comentadores)
const user = new schema.Entity('users');

// defino el esquema de los comentarios, que son realizados por un usuario
const comment = new schema.Entity('comments', {
    commenter: user
});

// defino el esquema de los articulos, que tienen un autor y una cantidad de comentarios
const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
});

// creamos el objeto normalizado
const normalizedData = normalize(blogPost, article);
console.log(JSON.stringify(normalizedData, null, 3));
