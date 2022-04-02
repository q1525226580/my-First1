function post(){
    var post = document.getElementById('post');
    post.style.display = 'block';
}

// 发布
function postSuccess(){
    // 标题部分
    var title = document.getElementById('title').value;
    // console.log(title);
    var h1_ = document.createElement('h1');
    h1_.innerHTML = title;


    var p_ = document.createElement('p');
    var span_l = document.createElement('span');
    var span_r = document.createElement('span');
    // 板块部分
    var sec = document.getElementById('sec').value;
    span_l.innerHTML='板块：'+sec;

    // 当前时间
    var date = new Date();
    var time = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+ date.getHours()+':'+date.getMinutes();
    span_r.innerHTML='发表时间：'+time;
    p_.appendChild(span_l);
    p_.appendChild(span_r);



    // img 图片
    var div_ = document.createElement('div');
    var img_ = document.createElement('img');
    var imgs = ['tou01.jpg','tou02.jpg','tou03.jpg','tou04.jpg'];
    img_.src = './images/'+imgs[Math.floor(Math.random()*4)];
    div_.appendChild(img_);

    // 创建<li></li>
    var li_ = document.createElement('li');
    li_.appendChild(div_);
    li_.appendChild(h1_);
    li_.appendChild(p_);


    var postList = document.getElementById('postList');
    postList.insertBefore(li_,postList.firstElementChild);

    document.getElementById('title').value='';
    document.getElementById('sec').value = '';
    var post = document.getElementById('post');
    post.style.display = 'none';
    
} 