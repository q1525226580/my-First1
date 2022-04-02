$(function() {
    var num = 1;
    var c = ['#46e0fc', '#0488d3', '#ecd7ac'];

    function fnTab(i) {
        $('.top_slide_wrap ul li').eq(i).fadeIn(0).siblings().fadeOut(0);
        $('.banner_slider').css('background', c[i]);
    }
    $('.num li').mouseover(function() {
        var n = $(this).index();
        fnTab(n);
        num = n;
    })
    var timer = null;

    function auto() {
        num++;
        if (num > 2) num = 0;
        fnTab(num);
    };
    auto();
    timer = setInterval(auto, 3000);
})







var imgs = document.getELementsByClassName(' imgs')[0].getELementsByTagName(' img ')
var lis = document.getELementsByTagName('li')
var out = document.getELementsByClassName('out')[0]
var timer = null,
    timer2 = null
var index = 0

function autoMove() {
    timer = setInterval(function() {
        index++
        if (index >= imgs.length) {
            index = 0
        }
        move()
        listStyle()
    }, 2000)
}
autoMove()

function move() {
    var step = 0;
    var maxStep = 20;
    var start = out.scrollLeft;
    var end = imgs[0].offsetWidth * index;
    var everyStep = (end - start) / maxStep;
    timer2 = setInterval(function() {
        step++;
        if (step >= maxStep) {
            clearInterval(timer2)
        }
        start += everyStep
        out.scrollLeft = start
    }, 10)
}

function listStyle() {
    for (var i = 0; i < lis.Length; i++) {
        lis[i].className = ' '
    }
    lis[index].className = 'active'
}
document.addEventListener('visibilitychange', function() {
    if (this.visibilityState == "visible") {
        autoMove()
    }
    if (this.visibilityState == "hidden") {
        clearInterval(timer1)
        clearInterval(timer2)
    }
})