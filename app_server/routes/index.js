var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.json({'message': 'Well Done Bro' });
});

module.exports = router;
