function setCookie(key,value,time){
    var date_ = new Date();
    date_.setDate(date_.getDate()+time);
        document.cookie=key+'='+value+';expires='+date_;
}

function getCookie(key){
    var arr = document.cookie.split(';');
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        var n_arr = arr[i].split('=');
        var n_key = n_arr[0].replace(/^\s/,'');
        if(n_key == key){
            console.log(n_arr[0],n_arr[1]);
            return n_arr[1];
        }
    }
    return '';
}

function removeCookie(key){
    this.setCookie(key,'',-1);
}
