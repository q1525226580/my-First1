// 角度初始化
var RotateY = 0;
var RotateX = 0;

// 用个变量来拦截onmousemove，
var flag = false;

// 起点位置
var old_x = 0;
var old_y = 0;
document.onmousedown = function (e) {
    flag = true;
    // 按下鼠标时，记录起点位置
    old_x = e.pageX;
    old_y = e.pageY;
}
document.onmousemove = function (e) {
    // 必须是按下后移动才有效果
    if (flag) {
        /**
          * 新位置减去老位置
          * 得到鼠标移动的X/Y距离
        */
        var _x = e.pageX - old_x;
        var _y = e.pageY - old_y;

        /**
         * 除以70得到需要旋转的角度
         * 除数越大，鼠标移动后旋转的角度越小，
         * 相反，除数是1，鼠标轻轻拖动，也会旋转的非常厉害
        */
        RotateY += _x / 70;
        RotateX += -(_y / 70);
        /**
          * 添加transform，盒子进行3D旋转
        */
        $('.box').css({
            transition: 'linear',
            transform: 'rotateX(' + RotateX + 'deg) rotateY(' + RotateY + 'deg)'
        });
    }
};
document.onmouseup = function () {
    flag = false;
    // 鼠标抬起时结束
};
var clickNum = 1;    //点击次数
$('.box').children().click(function () {
    // 如果点击次数是奇数就展开，偶数就收起
    if (clickNum % 2 == 0) {
        // 收起
        $('.out-front').css({
            transform: 'translateZ(100px)'
        });
        $('.out-back').css({
            transform: 'translateZ(-100px) rotateY(180deg)'
        });
        $('.out-left').css({
            transform: 'translateX(-100px) rotateY(-90deg)'
        });
        $('.out-right').css({
            transform: 'translateX(100px) rotateY(90deg)'
        });
        $('.out-top').css({
            transform: 'translateY(-100px) rotateX(90deg)'
        });
        $('.out-bottom').css({
            transform: 'translateY(100px) rotateX(-90deg)'
        });
    } else {
        // 展开
        $('.out-front').css({
            transform: 'translateZ(200px)'
        });
        $('.out-back').css({
            transform: 'translateZ(-200px) rotateY(180deg)'
        });
        $('.out-left').css({
            transform: 'translateX(-200px) rotateY(-90deg)'
        });
        $('.out-right').css({
            transform: 'translateX(200px) rotateY(90deg)'
        });
        $('.out-top').css({
            transform: 'translateY(-200px) rotateX(90deg)'
        });
        $('.out-bottom').css({
            transform: 'translateY(200px) rotateX(-90deg)'
        });
    }
    clickNum++;
});

// box 的所有子元素添加鼠标手势样式
$('.box').children().mouseenter(function () {
    $(this).css({ cursor: 'pointer' });
});
