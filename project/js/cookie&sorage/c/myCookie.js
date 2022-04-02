function setCookie(key,value,time){
    var date = new Date();
    date.setDate(date.getDate()+time);
    document.cookie = key+'='+value+';expires='+date;
}
function getCookie(key){
    var cookies = document.cookie;
    var arry = cookies.split('; ');
    for(var item of arry){
        var new_arry = item.split('=');
        if(new_arry[0] == key){
            return new_arry[1];
        }
    }
}
function removeCookie(key){
    this.setCookie(key,'',-1)
}
