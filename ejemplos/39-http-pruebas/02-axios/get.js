const axios = require('axios');

const URL = 'http://localhost:8080'

async function simpleGet() {
    try {
        let response = await axios.get(URL);
        console.log(response.data)
    } catch (error) {
        console.error(error.response);
    }
};

async function queryParams() {
    try {
        let response = await axios.get(URL + '/query', { params: { nombre: 'emanuel' } });
        console.log(response.data)
    } catch (error) {
        console.error(error.response);
    }
};

async function urlParams() {
    try {
        let response = await axios.get(URL + '/params/23');
        console.log(response.data)
    } catch (error) {
        console.error(error.response);
    }
};

simpleGet();
queryParams();
urlParams();