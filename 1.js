getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/css.style')
    request.onreadystatechange = () => {
        // 判断是否下载完成
        if (request.readyState === 4) {
            // 判断状态码，创建成功还是失败
            if (request.status >= 200 && request.status < 300) {
                // 执行css
                const style = document.createElement('style')
                style.innerHTML = request.readyState
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    }
    request.send()
}