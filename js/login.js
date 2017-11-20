/**
 * Created by Administrator on 2017/8/21.
 */
$(()=> {
	
//获取提交按钮绑定点击事件
    function clear() {
        $("input:not(:last-child)").val("");
    }
    clear();
    btn.onclick = function () {
		
        //获取用户名和密码
        var u = uname.value;
        var p = upwd.value;
        //发起异步请求，并且获取返回数据
        $.ajax({
            url: "data/login.php",
            type: "POST",
            data: {uname: u, upwd: p},
            success: function (data) {
				
                if (data.code > 0) {
					
                    //判断是否登录成功
                    //如果登陆成功，保存此次登陆用户名---会话及存储
                    sessionStorage.setItem("uname", u);
                    //隐藏form表单, div 内容（登陆成功 <a>进入首页</a>），点击a跳转到首页
                    login.style.display = "none";
                    div.innerHTML = `登陆成功 <a href="index.html">进入首页</a>`;
                    div.className = "size";
                } else {
					console.log(data.msg)
                    $("#alert").html(data.msg);
                    $("#alert").addClass("alert");
                }
            },
            error: function () {
                alert("网络错误9");
            }

        });


    };
})