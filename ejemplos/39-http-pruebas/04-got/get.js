const got = require('got');
const URL = 'http://localhost:8080';

async function makeGet() {
    try {
        let response = await got(URL);
        console.log(response.body);
    } catch (error) {
        console.error(error);
    }
}

makeGet();