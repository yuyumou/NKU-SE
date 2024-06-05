var express = require('express');
var router = express.Router();
var db = require('../../utils/db');

router.get('/', async function(req, res, next) {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.pageSize) || 10
    const offset = (page - 1) * pageSize
    var sql = `SELECT * FROM user WHERE user_level = 0 OR user_level = 1 LIMIT ? OFFSET ?`;
    var countSql = `SELECT COUNT(*) AS total FROM user WHERE user_level = 0 OR user_level = 1`;
    // results  = await db.query(sql, [pageSize, offset]);
    const [results, totalResults] = await Promise.all([
        db.query(sql, [pageSize, offset]),
        db.query(countSql)
    ]);
    const total = totalResults[0].total
    // res.json({data: results, total: 123});
    res.json({
        data: results,
        total: total
    });
})  
module.exports = router;