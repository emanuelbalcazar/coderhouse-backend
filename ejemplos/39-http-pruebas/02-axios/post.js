const axios = require('axios');

const URL = 'http://localhost:8080'

axios.post(URL + '/post', { animal: 'perro', edad: 6 })
    .then(response => {
        console.log(response.data);
    })
    .catch(console.log);
