/* 
  这个js文件就是用来模拟jsonp 请求的后台
    后台返回的数据，我们在这里模拟好

    我们约定好，如果我在请求的url地址中，发现来 cb 参数，我就认为是jsonp

  './index.js?cb=getdata',
  后台就回根据前端请求时传的参数值。来生成一个函数的调用
  getdata();

  接下来回吧需要给前端返回的数据，以实参的形式，放入函数的调用中
  getdata(data);


  做好以上步骤以后，
  后台会把函数调用的这段代码给前端响应回去；

    */

var data = {
  msg: '我是jsonp返回的数据',
  code: 10086,
  list: [
    { name: 'liis', age: 12 },
    { name: 'zhangsan', age: 12 },
    { name: 'zhuwuneng', age: 12 },
  ],
}

getdata(data)
