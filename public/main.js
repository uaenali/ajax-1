// console.log('我是main.js');
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            // 数组每一项插到ul后面
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    }
    request.send();
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
           console.log(request.response);//现在得到了json中的字符串
           // 把字符串变成js的对象
           // 把符合JSON语法的字符串变成，对应的对象或者其他东西（注意这里不是一定是对象）
           const object = JSON.parse(request.response)
        //    console.log(object);//json合成的js对象
            myName.textContent = object.name //这就是平时进入网页，显示的欢迎某某（这种昵称显示有2种技术，1.html中原本就写好了 2.就是使用AJAX请求来，再展示的）
        } 
        
    }
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseXML);//直接拿到对象 说明是个dom,所以也不用创建标签了，直接dom是request.responseXML
            const dom = request.responseXML;
            // 得到里面的内容
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());//去掉回车1
        }
    }
    request.send()
}



getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload = () => {
        console.log(request.response);
        const div = document.createElement('div')
        div.innerHTML = request.response//填写div内容
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    // 调用它的open方法
    request.open('GET', '/2.js');
    request.onload = () => {
        // 执行js
        // 创建一个script
        const script = document.createElement('script')
        // 向script中添加内容
        script.innerHTML = request.response
        // 将script标签插到身体里
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send();
}

// 由于直接请求看的不明显，在index中添加按钮，点击请求
// 监听 用户点击时就会调用这个函数，这个函数就是做我们的四个步骤
getCSS.onclick = () => {
    const request = new XMLHttpRequest();//1.创建HttpRequest对象
    // request.open(method, url)//2.调用对象的open方法
    request.open('GET', '/style.css');//readyState=1    //如果路径写错，还是打印下载完成
    // 3.监听对象的成功和失败
    request.onreadystatechange = () => {
        // 发送之后 服务响应第一个字节，打印出3。都下载完成了，打印为4
        // 请求到了css内容
        // console.log(request.readyState);
        // readyState只是表示下载完成了，并不能知道到底  下载的成功还是失败

        // 下载完成，但不知道是成功2XX 还是失败4XX     // 判断是否下载完成，完成后在去执行css
        if (request.readyState === 4) {
            // console.log("下载完成");
            // console.log(request.status);//其实应该是响应的status
            if (request.status >= 200 && request.status < 300) {
                // 执行css  
                // 1.创建style 标签    (将内容生效 变成蓝色)
                const style = document.createElement('style')
                // 2.填写 style 内容
                style.innerHTML = request.response
                // 3.将style插到头里面
                document.head.appendChild(style)
            } else {
                    // 提示加载失败
                    alert('加载css失败');
                }
        }       
    }
    

    //4.发送请求
    request.send()//readyState=2
}
