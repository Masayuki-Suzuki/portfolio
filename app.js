//require and general settings
const express         = require('express'),
      app             = express(),
      path            = require('path'),
      PORT            = 3000,
      IP              = '127.0.0.1';

//Routers require
const indexRoutes = require('./routes/index');
app.use(express.static(path.join(__dirname + '/public')));
//app.use(express.static(path.join(__dirname + '/public')));

app.set('view engine','ejs');

app.use('/', indexRoutes);

app.listen(PORT,IP,() => {
  console.log('SERVER HAS STARTED!!');
});