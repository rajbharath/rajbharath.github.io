var express = require('express');
var Mailchimp = require('mailchimp-api-v3');
var app = express();
var bodyParser = require('body-parser');
var mailchimp = new Mailchimp('063e5774e6c87343568ed153155a2726-us15');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./_site/'));

app.get('/subscribe', (req, res) => {
  subscribe('rbrajbharath1@gmail.com')
    .then((result) => { res.sendStatus(200); })
    .catch((err) => { res.status(err.status).send(err.detail); });
});

let portNumber = 5000;
app.listen(portNumber, function () {
  console.log('GithubTamizha Backend listening on port ' + portNumber);
});

let subscribe = (email) => {
  const postData = JSON.stringify({
    "email_address": "email",
    "status": "subscribed"
  });

  const options = {
    host: 'http://us15.api.mailchimp.com',
    path: '/3.0/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Content-Length': Buffer.byteLength(postData),
    },
    auth: 'raj:063e5774e6c87343568ed153155a2726-us15'
  };

  return new Promise((resolve, reject) => {
    mailchimp.request({
      method : 'post',
      path : 'lists/678bdee735/members',
      path_params : {
        //path parameters, see mailchimp documentation for each call
      },
      body : {
        "email_address": email,
        "status": "subscribed"
      }
    }, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(result);
      resolve(result);
    });
  });

}
