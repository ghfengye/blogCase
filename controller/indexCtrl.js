//导入model模块


module.exports = {
    showIndexPage(req,res){
        //渲染首页，但前提是需要设置默认模板引擎
        res.render('index',{});
    }
}