var express = require('express');
var router = express.Router();
var db = require('../../utils/db');

router.get('/', async function(req, res, next) {
    var sql = 'SELECT * FROM user where user_level = 0 || user_level = 1';
    results  = await db.query(sql, []);
    res.json(results);
})
module.exports = router;