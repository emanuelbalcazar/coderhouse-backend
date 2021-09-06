/* ---------------------------------------------------------------------- */
/*                                WAPP                                    */
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
      body: process.argv[3],
      mediaUrl: ['https://i0.wp.com/unprogramador.com/wp-content/uploads/2020/04/BeFunky-design.jpg?resize=800%2C500&ssl=1'],
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${process.argv[2]}`
      })
.then(message => console.log(message))
.catch(console.log)    
