const express    = require('express'),
      router     = express.Router(),
      bodyParser = require('body-parser'),
      mailer     = require('nodemailer');

const transport = {
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers:'SSLv3'
  },
  auth: {
    user: 'm.suzuki365@outlook.com',
    pass: '9090_8080Afrmx'
  }
};

let message = {
  from: 'Portfolio Contact Form <m.suzuki365@outlook.com>',
  to: 'm.suzuki.exe@gmail.com',
  subject: 'Message From Portfolio',
  html: ''
}

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

  let transporter = mailer.createTransport(transport);

  const returnMsg = {
    msg: "Success!! Thank you for sending your message.",
    err: "Oops!! Sorry, couldn\'t send your message. please try again."
  }

  let mailContent =
      `<h3>Message From Portfolio's Form</h3>
       <p><strong>name : </strong>${req.body.name}</p>
       <p><strong>company : </strong>${req.body.company}</p>
       <p style="margin-bottom: 30px;"><strong>e-mail : </strong> ${req.body.email}</p>
       <h4>Message:</h4>
       <p>${req.body.msg}</p>`;

  message.html = mailContent;

  transporter.sendMail(message, function(err, response) {
    console.log( err || response);
    if(err){
      res.send(JSON.stringify(returnMsg.err));
    } else {
      res.send(JSON.stringify(returnMsg.msg));
    }
  });
});

router.get('/privacy-policy', (req,res) =>{
  res.render('main/privacy-policy');
});

router.get('*', (req,res) => {
  res.send("Oops!! Page is not found...");
});

module.exports = router;
