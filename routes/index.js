const express    = require('express'),
      router     = express.Router();

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

router.get('*', (req,res) => {
  res.send("Oops!! Page is not found...");
});

module.exports = router;