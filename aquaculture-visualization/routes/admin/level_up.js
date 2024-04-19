var express = require('express');
var router = express.Router();
var db = require('../../utils/db');

router.put(`/:userName`, async function(req, res, next) {
    // console.log(req.params);
    var userName = req.params.userName;
    var sql = 'UPDATE user SET user_level = user_level ^ 1 WHERE user_name = ?';
    await db.query(sql, [userName])
      .then(results => {
        res.json({ message: '用户权限提升成功' });
      })
      .catch(error => {
        console.error('无法提升用户权限:', error);
        res.status(500).json({ error: '无法提升用户权限' });
      });
  });

  module.exports = router;