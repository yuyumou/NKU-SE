var express = require('express');
var router = express.Router();
var db = require('../../utils/db');
var crypto = require('crypto');
      
router.post('/', async function (req, res, next) {
	const sql1 = 'SELECT * FROM user WHERE user_name = ?'
	const sql2 = 'INSERT INTO user (user_name,user_password,user_level,user_email) value(?,?,0,?)'
	var result = await db.query(sql1,[req.body.params.username])
	if(result.length > 0){
		res.send({//用户名重复
			status: 202,
		})
	}else{
		var crypt_password = crypto.createHash('md5').update(req.body.params.password).digest('hex') 
		await db.query(sql2,[req.body.params.username,crypt_password,req.body.params.email])
		res.send({//注册成功
			status: 200,  
		})
	}
});
module.exports = router;
