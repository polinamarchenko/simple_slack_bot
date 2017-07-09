const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true}));

// app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/hey', (req, res, next) => {
  const userName = req.body.user_name;
  const botPayload = {
    text: `Hello ${userName}, welcome to our Slack channel`
  };
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.listen(port, () => {
  console.log(`Listenin on port: ${port}`);
})
