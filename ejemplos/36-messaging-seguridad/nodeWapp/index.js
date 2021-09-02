/* ---------------------------------------------------------------------- */
/*                                WAPP                                    */
/* ---------------------------------------------------------------------- */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

//https://www.twilio.com/console/sms/whatsapp/sandbox
const accountSid = 'AC129b5ed55990eacb29b4115f38752c63';
const authToken = 'b9b8b93b45779fa0634e100f5caccaf0';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
      body: `Te paso un foto de Twilio...`,
      mediaUrl: ['https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg'],
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+5492805058546'
      })
.then(message => console.log(message.sid))
.catch(console.log)    
