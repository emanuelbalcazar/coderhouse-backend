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

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
    commenter: user
});

// Define your article
const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
});

const normalizedData = normalize(blogPost, article);

console.log(JSON.stringify(normalizedData, null, 3));
