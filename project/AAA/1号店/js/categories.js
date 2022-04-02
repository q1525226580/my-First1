$(function() {
    var state = false
    $('#sortPrice').click(function() {
        state = !state;
        var length = $('.cate_list>li').length
        if (state) {
            for (var out = 0; out <= length; out++) {
                for (var int = 0; int < length; int++) {
                    var frist = Number($('.cate_list>li').eq(out).find('span').text().substring(1));
                    var sencend = Number($('.cate_list>li').eq(int).find('span').text().substring(1))
                    console.log(frist, sencend);

                    if (frist < sencend) {
                        $('.cate_list>li').eq(out).insertBefore($('.cate_list>li').eq(int))
                    }
                }
            }
        } else {
            for (var out = 0; out <= length; out++) {
                for (var int = 0; int < length; int++) {
                    var frist = Number($('.cate_list>li').eq(out).find('span').text().substring(1));
                    var sencend = Number($('.cate_list>li').eq(int).find('span').text().substring(1))
                    if (frist > sencend) {
                        $('.cate_list>li').eq(out).insertBefore($('.cate_list>li').eq(int))
                    }
                }
            }
        }
    })
})