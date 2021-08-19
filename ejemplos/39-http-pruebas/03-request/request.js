const request = require('request');

const URL = 'http://localhost:8080';

request(URL, (error, response, body) => {
    console.log('get error', error)
    console.log('get status code', response ? response.statusCode : '???')
    console.log('get body', body)
})

request.post(URL + '/post', {json: { nombre: 'emanuel' }}, (error, response, body) => {
    console.log('post error', error)
    console.log('post status code', response ? response.statusCode : '???')
    console.log('post body', body)
});
