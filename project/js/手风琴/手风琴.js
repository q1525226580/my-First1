function Gallery(el, option) {
    var out = document.querySelector(el)
    if (option.row && option.col && option.row * option.col != out.children.length
    ) {
        throw ' row && col err'
    }
    var defaultOption = {
            row: 5,
            col: 4,
            maxWidth: 350,
            maxHeight: 420,
            minWidth: 100,
            maxHeight: 80,
    }
    Object.assign(defaultOption,option)





//     out.style.width = defaultWidth*4 + activeWidth + 'px';
//     function activePic(index){
//         var c_x = index%col;
//         var c_y = Math.floor(index/col);
//         for(var j = 0;j<col;j++){
//             for(var k = 0;k<row;k++){
//                 var  ddd = col *k +j;
//                 if(c_x == j&& c_y == k){
//                     out.children[ddd].style.width = activeWidth+'px';
//                     out.children[ddd].style.height = activeHeight+'px';
//                 }else if(c_x == j){
//                     out.children[ddd].style.width = activeWidth+'px';
//                     out.children[ddd].style.height = defaultHeight+'px';
//                 }else if(c_y == k){
//                     out.children[ddd].style.width = defaultWidth+'px';
//                     out.children[ddd].style.height = activeHeight+'px';
//                 }else{
//                     out.children[ddd].style.width = defaultWidth+'px';
//                     out.children[ddd].style.height = defaultHeight+'px';

    for(var i = 0;i<out.children.length;i++){
        out.children[i].ind = i;
        out.children[i].onmouseenter = function(){
            activePic(this.index);
        }
    }
}
