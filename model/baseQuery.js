//导入mysql模块
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'blog'
});
// module.exports = connection;
    var sqlstr = 'select * from users';
        connection.query(sqlstr,(err,results)=>{
            console.log(results);
        })
        connection.end();