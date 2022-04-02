/*
  实现具体的功能

  1.初始化数据
  why？？？
  想象一下：购物车 数据来源
  a.如果你之前的购物册是空的，数据来自于浏览商品时，你添加到购物车的商品
  b.之前购物车是有数据的，打开软件（新的设备登录账号），购物车数据来自于后台接口数据


  今天 以上两种数据来源 我们都用不了。
  今天就另辟蹊径，从页面上来获取数据，初始化我们购物车的数据

  var shopcar = {
    list:[
    {num:2,price:12,tp:24},
    {},
    {}
    ], //存放单个商品数据
    tnum:2,//整个购物车的数量
    tprice：143.5//总商品价格
  }

  会以上面的数据格式来初始化购物车数据，具体的数据是从页面来获取的

*/

// 初始化购物车对象
var shopcar = {};
shopcar.list = [];
$.each($('.list li'), function(index, item) {
    var n_ = $(item).find('input').val() - 0; //商品数量
    var p_ = $(item).find('.pri').text() - 0;
    shopcar.list.push({
        num: n_,
        price: p_,
        tp: n_ * p_
    });
});
shopcar.tnum = $('.tnum').text() - 0;
shopcar.tprice = $('.tprice').text() - 0;




// 页面的事件 来操作数据的变化
//增加商品
$('.add').on('click', function() {
    // 页面上有三个 + ，怎么知道点击的是哪一个？要修改数据
    // 修改的是哪一个数据呢？  index() 返回元素的索引位置
    var index = $(this).parent().index();
    console.log(index);
    // 修改你对应的数据,num,tp, tnum,tpirce ,都要联动
    // 增加改数据  减少时也要改数据   删除时还要改数据
    var n = ++shopcar.list[index].num;
    // 添加商品，不能加过库存量 100；
    // 封装一个方法【changeData】，专门来修改数据，所有数据的修改都经过这个方法
    changeData(index, n);
})

// 减法
$('.subtract').on('click', function() {
    var index = $(this).parent().index()
    var n = --shopcar.list[index].num;
    if (n <= 0) {
        if (confirm('是否要删除商品？')) {
            del(index)
        }
        return
    }
    changeData(index, n)
})

// 删除
$('.del').on('click', function() {
        var index = $(this).parent().index();
        del(index)
    })
    // 删除方法
function del(index) {
    // 删除对应的数据
    shopcar.list.splice(index, 1)
    console.log(shopcar)
    changeData(-1) //要想办法区分删除/增加/减少
        // 删除页面结构
    $('.list li').eq(index).remove()
}

// 修改数据
function changeData(index, n) {
    if (index >= 0) {
        // 修改单个商品的数据
        var pri = shopcar.list[index].price; //单价
        shopcar.list[index].tp = n * pri
    }


    // 总商品数量/价格
    shopcar.tnum = 0
    shopcar.tprice = 0
    $.each(shopcar.list, function(index, item) {
            shopcar.tnum += item.num;
            shopcar.tprice += item.tp;
        })
        // 把索引值传入到渲染方法中
    render_html(index);
}

// 渲染数据,把数据渲染给谁
function render_html(index) {
    if (index >= 0) {
        var num = shopcar.list[index].num;
        var tp = shopcar.list[index].tp;
        $('.list li').eq(index).find('input').val(num);
        $('.list li').eq(index).find('.pri').text(tp)
    }

    $('.tnum').text(shopcar.tnum)
    $('.tprice').text(shopcar.tprice)
}