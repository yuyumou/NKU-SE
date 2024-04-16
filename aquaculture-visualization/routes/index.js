var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.send({
    msg : 'welcome home page from backend',
    level : req.level
  })
});

module.exports = router;
