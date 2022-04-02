// 关闭按钮
function adv_close() {
    document.getElementById('close').style.display = 'none';//关闭按钮
    document.getElementById('float').style.display = 'none';//关闭图片
}


// 定义变量
var closeObject; //关闭x号
var closeTop;
var closeLeft;

var floatObject;//广告图片
var floatTop;
var floatLeft;

// 初始化页面的时候  获取关闭符号  和广告图片距离页面的距离
window.onload = function () {
    //关闭符号部分
    closeObject = document.getElementById("close");
    closeTop = closeObject.offsetTop;
    closeLeft = closeObject.floatLeft;
    // 广告图片
    floatObject = document.getElementById("float");
    floatLeft = floatObject.offsetLeft;
    floatTop = floatObject.offsetTop;
}

window.onscroll = function () {
    // 叉号页面滚动的距离
    var closeScrollLeft = document.documentElement.scrollLeft;
    var closeScrollTop = document.documentElement.scrollTop;

    //叉号在页面的位置  等于原始的页面距离+ 滚动的距离
    closeObject.style.top = closeScrollTop + closeTop + 'px';
    closeObject.style.left = closeScrollLeft + closeLeft + 'px';

    // 广告图片页面滚动的距离
    var floatScroolLeft = document.documentElement.scrollLeft;
    var floatScroolTop = document.documentElement.scrollTop;
    //广告图片在页面的位置  等于原始的页面距离+ 滚动的距离
    floatObject.style.left = floatScroolLeft + floatLeft+'px';
    floatObject.style.top = floatScroolTop + floatTop+'px';
}
