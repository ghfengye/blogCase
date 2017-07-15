//导入模块
var express = require('express');
//创建express服务
var app = express();
//监听端口，并启用服务
app.listen(3001,()=>{
    console.log('http://127.0.0.1:3001');
});
//细节-1：设置默认模板引擎
app.set('view engine','ejs');
app.set('views','./views'); //设置默认的模板路径

//导入路由模块
var indexRouter = require('./rounter/indexRouter.js');
app.use(indexRouter);