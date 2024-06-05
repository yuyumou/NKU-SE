var express = require('express');
var router = express.Router();

var adminAlluserRouter = require('./all_users');
var adminAlladminRouter = require('./all_admins');
var adminLevelUpRouter = require('./level_up');
const tokenhandler = require('../../utils/token');

router.use('/',tokenhandler.UserAdminVerify);
router.use('/allusers',adminAlluserRouter);
router.use('/alladmins',adminAlladminRouter);
router.use('/level_up',adminLevelUpRouter);

module.exports = router;
