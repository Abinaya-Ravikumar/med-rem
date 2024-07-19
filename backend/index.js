const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const dotenv = require('dotenv');
const schedule = require('node-schedule');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// server's time zone(Asia/Kolkata for IST)
process.env.TZ = 'Asia/Kolkata';

function sendSMS(phoneNumber, message) {
  client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phoneNumber
  }).then(message => {
    console.log(`Message sent to ${phoneNumber}: ${message.sid}`);
  }).catch(error => {
    console.error(`Error sending message to ${phoneNumber}: ${error.message}`);
  });
}

app.get('/', (req, res) => {
  res.send('Welcome to the Medicine Reminder Service');
  console.log("This is the backend page");
});

app.post('/reminder', (req, res) => {
  const { tablet, dosage, phoneNumber, time } = req.body;
  const notifyTime = new Date(time);
  const message = `Reminder: Take ${dosage} of ${tablet}.`;

  console.log(`Setting reminder for ${phoneNumber} at ${notifyTime}`);
  console.log(`Current server time: ${new Date()}`);

  schedule.scheduleJob(notifyTime, () => {
    sendSMS(phoneNumber, message);
    console.log(`Scheduled SMS sent for ${phoneNumber} at ${new Date()}`);
  });

  res.send('Reminder set successfully!');
});

app.listen(3000, () => {
  console.log('Backend server is running on port 3000');
});
