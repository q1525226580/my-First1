$(function() {
    $('.i_car').each(function() {
        $(this).mouseover(function() {
            $(this).siblings().find('.last').css('display', 'none');
            $(this).find('.last').fadeIn().css('display', 'block');
        });
        $(this).mouseleave(function() {
            $(this).find('.last').css('display', 'none');
        })
    })


    var shopCar = {};
    shopCar.list = [];
    $.each($('.shop ul li'), function(index, item) {
        var n_ = $(item).find('.J_inputCount').val() - 0;
        var p_ = $(item).find('.pri').text() - 0;
        shopCar.list.push({
            num: n_,
            price: p_,
            tp: n_ * p_
        });
    })
    shopCar.J_totalCount = $('.J_totalCount').text() - 0;
    shopCar.J_totalPrice = $('.J_totalPrice').text() - 0;
    $('.J_btnAddCount').on('click', function() {
        var index = $(this).parent().index();
        console.log(index);
        var n = ++shopCar.list[index].num;
        changeData(index, n);
    })

    $('.J_btnDelCount').on('click', function() {
        var index = $(this).parent().index()
        var n = --shopCar.list[index].num;
        if (n <= 0) {
            if (confirm('是否要删除商品？')) {
                del(index)
            }
            return
        }
        changeData(index, n)
    })

    $('.J_btnDelete').on('click', function() {
        var index = $(this).parent().index();
        del(index)
    })

    function del(index) {
        shopCar.list.splice(index, 1)
        console.log(shopCar)
        changeData(-1)
        $('.shop ul li').eq(index).remove()
    }

    function changeData(index, n) {
        if (index >= 0) {
            var pri = shopCar.list[index].price;
            shopCar.list[index].tp = n * pri
        }
        shopCar.J_totalCount = 0
        shopCar.J_totalPrice = 0
        $.each(shopCar.list, function(index, item) {
            shopCar.J_totalCount += item.num;
            shopCar.J_totalPrice += item.tp;
        })
        render_html(index);
    }

    function render_html(index) {
        if (index >= 0) {
            var num = shopCar.list[index].num;
            var tp = shopCar.list[index].tp;
            $('.shop ul li').eq(index).find('.J_inputCount').val(num);
            $('.shop ul li').eq(index).find('.pri').text(tp)
        }
        $('.J_totalCount').text(shopCar.J_totalCount)
        $('.J_totalPrice').text(shopCar.J_totalPrice)
    }
})