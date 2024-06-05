var express = require('express');
var router = express.Router();
var db = require('../../utils/db');
var crypto = require('crypto');
      
router.post('/', async function (req, res, next) {
    const username = req.body.params.username;
    const password = req.body.params.password;
    const email = req.body.params.email;

    // 检查用户名是否已存在
    const checkUsernameQuery = 'SELECT * FROM user WHERE user_name = ?';
    const usernameResult = await db.query(checkUsernameQuery, [username]);
    if (usernameResult.length > 0) {
        return res.send({
            status: 202,
            message: '用户名已存在'
        });
    }

    // 检查邮箱是否已被注册
    const checkEmailQuery = 'SELECT * FROM user WHERE user_email = ?';
    const emailResult = await db.query(checkEmailQuery, [email]);
    if (emailResult.length > 0) {
        return res.send({
            status: 203,
            message: '邮箱已被注册'
        });
    }

    // 插入新用户信息
    const insertUserQuery = 'INSERT INTO user (user_name,user_password,user_level,user_email) VALUES (?,?,0,?)';
    const crypt_password = crypto.createHash('md5').update(password).digest('hex');
    await db.query(insertUserQuery, [username, crypt_password, email]);
    
    // 注册成功
    res.send({
        status: 200,
        message: '注册成功'
    });
});

module.exports = router;
