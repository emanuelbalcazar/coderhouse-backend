const normalizr = require("normalizr");
const normalize = normalizr.normalize;
const denormalize = normalizr.denormalize;
const schema = normalizr.schema;
​
const originalData = {
  id: "999",
  posts : [
    {
      id: "123",
      author: {
        id: "1",
        nombre: "Pablo",
        apellido: "Perez",
        DNI: "20442654",
        direccion: "CABA 123",
        telefono: "1567876547"
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "324",
          commenter: {
            id: "2",
            nombre: "Nicole",
            apellido: "Gonzalez",
            DNI: "20442638",
            direccion: "CABA 456",
            telefono: "1567811543"
          }
        },
        {
          id: "325",
          commenter: {
            id: "3",
            nombre: "Pedro",
            apellido: "Mei",
            DNI: "20446938",
            direccion: "CABA 789",
            telefono: "1567291542"
          }
        }        
      ]
    },
    {
      id: "1123",
      author: {
        id: "2",
        nombre: "Nicole",
        apellido: "Gonzalez",
        DNI: "20442638",
        direccion: "CABA 456",
        telefono: "1567811543"
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "1324",
          commenter: {
            id: "1",
            nombre: "Pablo",
            apellido: "Perez",
            DNI: "20442654",
            direccion: "CABA 123",
            telefono: "1567876547"
          }
        },
        {
          id: "1325",
          commenter: {
            id: "3",
            nombre: "Pedro",
            apellido: "Mei",
            DNI: "20446938",
            direccion: "CABA 789",
            telefono: "1567291542"
          }
        }        
      ]
    },
    {
      id: "2123",
      author: {
        id: "3",
        nombre: "Pedro",
        apellido: "Mei",
        DNI: "20446938",
        direccion: "CABA 789",
        telefono: "1567291542"
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "2324",
          commenter: {
            id: "2",
            nombre: "Nicole",
            apellido: "Gonzalez",
            DNI: "20442638",
            direccion: "CABA 456",
            telefono: "1567811543"
          }
        },
        {
          id: "2325",
          commenter: {
            id: "1",
            nombre: "Pablo",
            apellido: "Perez",
            DNI: "20442654",
            direccion: "CABA 123",
            telefono: "1567876547"
          }
        }        
      ]
    }        
  ]
}
​
// Definimos un esquema de usuarios (autores y comentadores)
const user = new schema.Entity('users');
​
// Definimos un esquema de comentadores
const comment = new schema.Entity('comments', {
  commenter: user
});
​
// Definimos un esquema de artículos
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});
​
// Definimos un esquema de posts (array de artículos)
const posts = new schema.Entity('posts', {
  posts: [article]
})
​
/* ---------------------------------------------------------------------------------------- */
const util = require('util')
​
function print(objeto) {
    console.log(util.inspect(objeto,false,12,true))
}
​
console.log(' ------------- OBJETO ORIGINAL --------------- ')
//print(originalData)
console.log(JSON.stringify(originalData).length)
​
​
console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedData = normalize(originalData, posts);
print(normalizedData)
console.log(JSON.stringify(normalizedData).length)
​
​
console.log(' ------------- OBJETO DENORMALIZADO --------------- ')
const denormalizedData = denormalize(normalizedData.result, posts, normalizedData.entities);
//print(denormalizedData)
console.log(JSON.stringify(denormalizedData).length)