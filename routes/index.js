const express    = require('express'),
      router     = express.Router();

router.get('/', (req,res) => {
  res.render('main/index');
});

module.exports = router;