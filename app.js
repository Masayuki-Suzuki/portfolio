//require and general settings
const express         = require('express'),
      app             = express(),
      path            = require('path'),
      bodyParser      = require('body-parser'),
      compression     = require('compression'),
      PORT            = 3000,
      IP              = '127.0.0.1';

//Routers require
const indexRoutes = require('./routes/index');
app.use(compression({
  threshold: 0,
  level: 9,
  memLevel: 9
}));
app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine','pug');
app.use('/', indexRoutes);
app.use('/privacy-policy', indexRoutes);

app.listen(PORT,() => {
  console.log('SERVER HAS STARTED!!');
});
