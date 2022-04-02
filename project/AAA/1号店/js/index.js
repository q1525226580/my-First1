$(function() {
    $('.leftNav ul li').each(function() {
        $(this).mouseover(function() {
            $(this).siblings().find('.zj').css('display', 'none');
            $(this).find('.zj').fadeIn().css('display', 'block');
            $(this).siblings().removeClass('liMouseOver');
            $(this).siblings().find('.fl').css('color', '');
            $(this).addClass('liMouseOver');
            $(this).find('.fl').css('color', 'orange')
        });
        $(this).mouseleave(function() {
            $(this).find('.zj').css('display', 'none');
            $(this).removeClass('liMouseOver');
            $(this).find('.fl').css('color', '')
        })
    })
})