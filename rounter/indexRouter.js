//导入express模块
var express = require('express');

//导入对应的控制模块
var indexCtrl = require('../controller/indexCtrl.js');
//路由模块
var router = express.Router();
//路由分发
router
 .get('/index',indexCtrl.showIndexPage);
    //暴露router
module.exports = router;