var express = require('express');
var router = express.Router();

const STORE_NAME = require('../data').STORE_NAME;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: STORE_NAME,
    loginId: 'matt',
  });
});

module.exports = router;
