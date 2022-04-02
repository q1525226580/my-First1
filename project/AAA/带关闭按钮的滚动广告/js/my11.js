function adv_close(){
    document.getElementById('close').style.display = 'none';
    document.getElementById('float').style.display = 'none';
}


// 定义变量
var closeObject; //关闭x号
var closeTop;
var closeLeft;

var floatObject;//广告图片
var floatTop;
var floatLeft;

// 初始化页面的时候  获取关闭符号  和广告图片距离页面的距离
window.onload = function(){
    closeObject =  document.getElementById('close');
    closeTop = closeObject.offsetTop;
    closeLeft = closeObject.offsetLeft;

      // 广告图片
    floatObject = document.getElementById("float");
    floatLeft = floatObject.offsetLeft;
    floatTop = floatObject.offsetTop;
}

window.onscroll = function(){
    var scrollLeft = document.documentElement.scrollLeft;
    var scrollTop = document.documentElement.scrollTop;

    //叉号在页面的位置  等于原始的页面距离+ 滚动的距离
    closeObject.style.top = closeTop + scrollTop +'px';
    closeObject.style.left = scrollLeft + closeLeft + 'px';


    floatObject.style.top = floatTop + scrollTop +'px';
    floatObject.style.left = floatLeft +scrollLeft+'px';

}
