// 引入express模块
var express = require('express')

// 调用express()方法创建一个对象
var app = express()

// 设置handlebars模版引擎
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

// 设置端口
app.set('port', process.env.PORT || 3000)

// 首页路由
app.get('/', function(req, res) {
    // res.type('text/plain')
    // res.send('home')
    
    res.render('home')
})

// 关于页面路由
app.get('/about', function(req, res) {
    // res.type('text/plain')
    // res.send('about')

    res.render('about')
})

// 中间件 定制404页面
app.use(function(req, res) {
    // res.type('text/plain')
    // res.status(404);
    // res.send('404 - Not Found')

    res.status(404)
    res.render('404')
})
// 中间件 定制500页面
app.use(function(req, res) {
    // res.type('text/plain')
    // res.status(500)
    // res.send('500 - Server Error')

    res.status(500)
    res.render('500')
})

// 开启并监听端口
app.listen(app.get('port'), function () {
    console.log('express 启动并监听' + app.get('port') + '端口， 按Command + C终止')
})
