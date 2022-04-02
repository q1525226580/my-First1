// 我要发帖按钮

//1、 完成  让 发帖弹框  从none 变为block
function post(){
    // 1.找到发帖弹框
    var post =  document.getElementById('post');
    // 2.设置弹框样式为block
    post.style.display = 'block';
}

// 2、发布按钮  绑定的函数 postSuccess()
function postSuccess(){
    // 1.获取title里面的内容 标题内容


    // 创建一个h1标签  把得到的input框值添加进来s
    var h1_ = document.createElement('h1');
     //    找到input框通过.value取值
    var title_t = document.getElementById('title').value;
    h1_.innerHTML = title_t;

    // 2.创建p标签  内部创建两个span


    var p_ = document.createElement('p');
    var span_l = document.createElement('span');
    var span_r = document.createElement('span');
    p_.appendChild(span_l);
    p_.appendChild(span_r);

     // spanal  内容：板块：+ select 下拉框里面的值
    var sec  =document.getElementById('sec').value;
    // console.log(sec);
    span_l.innerHTML = '板块：'+sec;

    // span2   内容：创建时间：2021-9-14 9:11
    var date = new Date();
    var time = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
    span_r.innerHTML = '创建时间：'+time;

      //  添加头像  div img
      var img_div = document.createElement('div');
      var img = document.createElement('img');

    //   头像数组
    var imgUrl = ['tou01.jpg','tou02.jpg','tou03.jpg','tou04.jpg']
    var index = Math.floor(Math.random()*4);
    img.src = './images/'+imgUrl[index];

      img_div.appendChild(img);

    // 3.创建<li></li> 里面追加元素  h1， p
    var li_ = document.createElement('li');
    li_.appendChild(img_div);
    li_.appendChild(h1_);
    li_.appendChild(p_)





    // 4.postList 添加li

    var ul = document.getElementById('postList');
    ul.insertBefore(li_,ul.firstElementChild);


    // 清空输入框
    document.getElementById('title').value = '';
    // document.getElementById('sec').value = '<option>请选择板块<option>';
    document.getElementById("post").style.display = 'none';
}
