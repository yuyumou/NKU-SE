var express = require('express');
var router = express.Router();

var adminAlluserRouter = require('./all_users');
var adminLevelUpRouter = require('./level_up');
const tokenhandler = require('../../utils/token');

router.use('/',tokenhandler.adminVerify);
router.use('/allusers',adminAlluserRouter);
router.use('/level_up',adminLevelUpRouter);

module.exports = router;
