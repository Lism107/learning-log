function ajax(method, url, data, success){
    var xhr = new XMLHttpRequest();

    //如果方法为get，且data有数据，url进行连接
    if (method == 'get' && data) {
        url += '?' + data;
    }

    xhr.open(method,url,true);

    //如果 get 发送，如果 post 发送数据
    if (method == 'get') {
        xhr.send();
    } else {
        //先设置请求头，告诉服务器 文档类型
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function(){
        if ( xhr.readyState == 4 ) {
            if (xhr.status == 200) {
                //这里放个函数，请求成功后执行，success函数如果存在就执行
                success && success(xhr.responseText);

            } else {
                alert('出错了，Err：' + xhr.status);
            }
        }
    }
}