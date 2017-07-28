const api_key = 'key-1a896272586470857fbe867261e61b1b',
      domain = 'sandbox51f07a76bfcd4370a2892a416b63b544.mailgun.org',
      mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Portfolio Site <postmaster@sandbox51f07a76bfcd4370a2892a416b63b544.mailgun.org>',
  to: 'm.suzuki.exe@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log('error massage: ' + body.message);
});
