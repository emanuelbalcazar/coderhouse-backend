/* ---------------------------------------------------------------------- */
/*                                 SMS                                    */
/* ---------------------------------------------------------------------- */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC129b5ed55990eacb29b4115f38752c63';
const authToken = 'cf0926fb1876af151745a5bade7a6255';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
      body: 'Hola soy un SMS desde Node.js!',
      from: '+17279395079',
      to: '+542805058546'
})
.then(message => console.log(message.sid))
.catch(console.log)
