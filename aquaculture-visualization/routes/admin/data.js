var express = require('express');
var router = express.Router();

const tokenhandler = require('../../utils/token');

router.use('/',tokenhandler.DataAdminVerify);

module.exports = router;
