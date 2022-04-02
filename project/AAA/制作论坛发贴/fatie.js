/*
	CREATED BY WANGLONG 2018.8.26
*/
function post(){
	document.getElementById('post').style.display = 'block';
}

function postSuccess(){
	var postList = document.getElementById('postList');
	var ava_arr = new Array('tou01.jpg','tou02.jpg','tou03.jpg','tou04.jpg');


// 头像
	// 创建li
	var lis = document.createElement('li'); 
	//图片div
	var img_div = document.createElement('div');
	// img
	var img_ava = document.createElement('img');
	// img设置src
	var img_index = parseInt(Math.random()*3);
	img_ava.setAttribute('src','images/'+ava_arr[img_index])

// 标题
	// 创建h1
	var titles = document.createTextNode(valuetext);
// 内容
// 时间



// 插入
	// img插入到div
	img_div.appendChild(img_ava);
	// div ---->  li
	lis.appendChild(img_div);
	// li插入到ul
	postList.appendChild(lis);


	document.getElementById('post').style.display = 'none';

}