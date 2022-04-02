$('.tableText').on('click', function() {
    $(this).html(function(num) {
        var tableText = document.getElementsByTagName('tableText')[0];
        var num = 60;
        var timer = null;
        tableText.onclick = function() {
            timer = setInterval(function() {
                tableText.innerText = '(' + num + ')重发';
                num--;
                if (num == 0) {
                    clearInterval(timer);
                    tableText.innerText = '获取验证码'
                }
            }, 1000)
        }
    })
})