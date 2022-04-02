function accordion(){
    var  out = document.getElementById('list');
    var defaultWidth = 100;
    var defaultHeight = 80;
    var activeWidth = 300;
    var activeHeight = 380;
    var row = 4;
    var col = 5;
    out.style.width = activeWidth + defaultWidth*4+'px';
    function activeImg(index){
        var c_x = index%col;
        var c_y = Math.floor(index/col);
        for(var j = 0;j<col;j++){
            for(var k = 0;k<row;k++){
                var  ddd = col *k +j;
                if(c_x == j&& c_y == k){
                    out.children[ddd].style.width = activeWidth+'px';
                    out.children[ddd].style.height = activeHeight+'px';
                }else if(c_x == j){
                    out.children[ddd].style.width = activeWidth+'px';
                    out.children[ddd].style.height = defaultHeight+'px';
                }else if(c_y == k){
                    out.children[ddd].style.width = defaultWidth+'px';
                    out.children[ddd].style.height = activeHeight+'px';
                }else{
                    out.children[ddd].style.width = defaultWidth+'px';
                    out.children[ddd].style.height = defaultHeight+'px';
                }
            }
        }
    }
    activeImg(0);
    for(var i = 0;i<out.children.length;i++){
        out.children[i].ind = i;
        out.children[i].onmouseenter = function(){
            activeImg(this.ind);
        }
    }
}
