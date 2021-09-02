/* ---------------------------------------------------------------------- */
/*                                 SMS                                    */
/* ---------------------------------------------------------------------- */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const dotenv = require('dotenv');
dotenv.config();

//https://www.twilio.com/console/sms/whatsapp/sandbox
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
      body: 'Hola soy un SMS desde Node.js!',
      from: '+17279395079',
      to: '+542805058546'
})
.then(message => console.log(message.sid))
.catch(console.log)
