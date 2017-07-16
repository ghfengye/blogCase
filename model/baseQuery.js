//导入mysql模块
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'blog'
});
 module.exports = connection;
 //测试数据连接状态：
    // var sqlstr = 'select * from users';
    //     connection.query(sqlstr,(err,results)=>{
    //         console.log(results);
    //     })
    //     connection.end();