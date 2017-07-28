const express    = require('express'),
      router     = express.Router(),
      bodyParser = require('body-parser'),
      mailer     = require('nodemailer'),
      xoauth     = require('xoauth2');

const gmail = {
  user: 'm.suzuki.fp@gmail.com',
  clientId: '866429438150-a8upbeie4elffcqav2le666d0rt7h5f5.apps.googleusercontent.com',
  clientSecret: '4GkX_blJSK0sPjNrsh5azmjw',
  refreshToken  : '1/CP6NTIOnJIIQwtkuMEC0_5CrquxNtBjsZN-9FpXwdxzRU0uqGHyBoq7x08irEQDW'
}

let message = {
  to : gmail.user,
  subject: 'Message From Portfolio',
  text: ''
}

let  generator = function() {
  var g = xoauth.createXOAuth2Generator(gmail);
  g.on('token', function(token) {
    console.log('New token for %s: %s', token.user, token.accessToken);
  });
  return g;
};

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/', (req,res) => {
  res.render('main/index');
});

router.get('/about', (req,res) =>{
  res.redirect('/');
});

router.get('/works', (req,res) =>{
  res.redirect('/');
});

router.get('/blogs', (req,res) =>{
  res.redirect('/');
});

router.get('/contact', (req,res) =>{
  res.redirect('/');
});

router.post('/contact', (req, res) =>{

  let transport = {
    service : 'gmail',
    auth    : {}
  };

  transport.auth.xoauth2 = generator();

  console.log(transport);

  let transporter = mailer.createTransport(transport);

  const returnMsg = {
    msg: 'Success!! Thank you for sending your message.',
    err: 'Oops!! Sorry, couldn\'t send your message. please try again.'
  }
  let mailContent =
      `<h1>Message From Portfolio's Form</h1>
       <p><strong>name:</strong> ${req.body.name}</p>
       <p><strong>company:</strong> ${req.body.company}</p>
       <p style="margin-bottom: 60px;"><strong>e-mail:</strong> ${req.body.email}</p>
       <h2>Message:</h2>
       <p>${req.body.msg}</p>`;

  message.text = mailContent;

  transporter.sendMail(message, function(err, response) {
    console.log(err || response);
    res.send(JSON.stringify(returnMsg.err));
  });
  //res.send(JSON.stringify(returnMsg.msg));
});

router.get('*', (req,res) => {
  res.send("Oops!! Page is not found...");
});

module.exports = router;