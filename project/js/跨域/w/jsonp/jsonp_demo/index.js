/* 
jsonp 接口地址：
http://localhost:3003/jsonp?callback=test
传参数
约定请求的参数中的指定参数：callback
服务器发现是 JSONP 请求， 就会把原来的返回对象变成 JS 代码。
JS 代码是函数调用的形式， 它的函数名是 callback 的值， 
它的函数的参数就是原来需要返回的结果。

*/

//通过require将http库包含到程序中
let http = require('http')
//引入url模块解析url字符串
let url = require('url')
//引入querystring模块处理query字符串
let querystring = require('querystring')
//创建新的HTTP服务器
let server = http.createServer()
//通过request事件来响应request请求
server.on('request', function (req, res) {
  let urlPath = url.parse(req.url).pathname
  let qs = querystring.parse(req.url.split('?')[1])

  // 如果请求路径里面包含有jsonp 和callback 就判断出来这是一个jsonp请求
  if (urlPath === '/jsonp' && qs.callback) {
    res.writeHead(200, {
      'Content-Type': 'application/json;charset=utf-8',
    })

    // 此处的data数据 就是后台要返回个前端的数据
    let data = {
      msg: 'jsonp返回的数据',
      fn: qs.callback,
      code: 200,
    }
    data = JSON.stringify(data)
    // 根据callback的值，创建函数 data 是函数内传递的参数
    let callback = qs.callback + '(' + data + ');' //test(data)
    console.log(callback)
    // 向前端进行响应
    res.end(callback)
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8',
    })
    res.end('Hell World\n')
  }
})
server.listen(3003, 'localhost', function () {
  console.log('your server is running here:localhost:3003')
})
