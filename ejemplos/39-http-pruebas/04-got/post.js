const got = require('got');
const URL = 'http://localhost:8080';

async function makePost() {
    try {
        let response = await got.post(URL + '/post', {
            json: {
                nombre: 'emanuel',
                apellido: 'balcazar'
            },
            responseType: 'json'
        });

        console.log(response.body);
    } catch (error) {
        console.error(error);
    }
}

makePost();