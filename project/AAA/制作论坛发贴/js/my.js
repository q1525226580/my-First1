
//我要发帖点击事件
function post() {
    document.getElementById('post').style.display = 'block';
}


//发布函数 postSuccess()
function postSuccess() {


    //头像部分
    //头像的img数组
    var ava_arr = new Array('tou01.jpg', 'tou02.jpg', 'tou03.jpg', 'tou04.jpg');

    //创建头像 标题 板块等整体部分  用一个li包裹
    //创建li
    var lis = document.createElement('li');
    // 创建图片div
    var img_div = document.createElement('div');
    //创建图片src img_ava
    var img_ava = document.createElement('img');
    // img设置src
    var img_index = Math.floor(Math.random() * 4);
    console.log(img_index);
    img_ava.setAttribute('src', './images/'+ava_arr[img_index]);


    //添加头像
    img_div.appendChild(img_ava);

    //标题部分
    //创建标题所在的h1
    var titleH1 = document.createElement('h1');
    //获取标题的输入input框值
    var title = document.getElementById('title').value;
    // 将标题内容放在h1标签中
    titleH1.innerHTML = title;

    //板块信息部分
    //创建一个新的p标签 用来放板块信息 包含两个span
    var p = document.createElement('p');
    var sec_name = document.createElement('span');
    var sec_value = document.getElementById('sec').value;//获取板块下拉框的值
    sec_name.innerHTML = '板块：' + sec_value;

    //创建时间部分
    var date = new Date();
    var nowDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();

    //创建存放时间的span
    var time_span = document.createElement('span');
    time_span.innerHTML = '创建时间：' + nowDate;// 把创建的时间添加进时间span标签内

    //在创建板块p标签 包裹板块信息里面 方法 板块 和创建时间
    p.appendChild(sec_name);//添加板块信息
    p.appendChild(time_span);//添加时间信息

    //添加内容 添加都装整体内容的lis中
    lis.appendChild(img_div);//添加图片头像部分
    lis.appendChild(titleH1);//添加标题部分
    lis.appendChild(p);//添加板块部分


// 显示的列表ul postList
    var postList = document.getElementById('postList');

//把lis 追加进显示整体的ul中
    postList.insertBefore(lis,postList.firstElementChild);//把当前内容插入到列表最前面

    document.getElementById("title").value="";    //标题设置为空
    document.getElementById("content").value="";  //内容设置为空

    document.getElementById("post").style.display="none";//把编辑框隐藏
}
