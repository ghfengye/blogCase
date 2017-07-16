##准备工作
###1、初始化项目
安装express，ejs 
###2、初始化app.js,router，controller，mysql，
一个基本的服务器，同时测试这个流程是否能够走通
##3、建user表
 注意：建表的时候要小心id要勾上自增，不然数据插入不了
### 4、测试数据库连接 用户名： root 密码 root
 测试：使用testmysql.js测试
###5、使用git
<b>bug： 因为设置了隐藏文件，所以git init后看不到,然后我以为是没有初始化成功，就重复git init，后面报Reinitialized existing Git repository in …… 其实这个意思是说实例化的仓储已经存在</b>
###6、忽略文件， .gitignore 
/node_modules/*
/testmysqlconnect/*

##开发
##1、index.ejs页面头部，尾部静态代码
 细节：托管静态资源 express.static('node_modules') 并挂在虚拟路径
  bootstrap依赖jquery

