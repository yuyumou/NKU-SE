var express = require('express');
var router = express.Router();    
var db = require('../../utils/db');
var crypto = require('crypto');
var tokenhandler = require('../../utils/token')

router.post('/', async function (req, res, next) {
	const sql = 'SELECT * FROM user WHERE user_name = ? AND user_password = ?'
	var crypt_password = crypto.createHash('md5').update(req.body.params.password).digest('hex')
	var result = await db.query(sql,[req.body.params.username,crypt_password])
	console.log(result)
	if(result.length > 0){
		const token = tokenhandler.generate({username: req.body.params.username})

		res.send({//成功登录
			status: 200,
			token: token,
			//level: result[0].user_level,
		})
	}else{
		res.send({//用户名或密码错误
			status: 202,
		})
	}
});
module.exports = router;
