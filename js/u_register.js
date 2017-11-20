/**
 * Created by HY on 2017/8/13.
 */

$(()=>{
    //加载头部和脚部
    $("#header").load("reg_header.html");
    $("#footer").load("reg_footer.html");

//验证form表单的内容
//清空input的所有内容
    function clear(){
    $("input:not(:last-child)").val("");
    }
clear();
//验证用户名正则
var nameReg=/^[0-9A-Za-z_\u4e00-\u9fa5]{4,20}$/;
var input=$("input[name=uname]");
var a=0;
//当获得焦点时p元素和id为uname的b元素处于初始状态。
input.focus(function(){
    $("p.modal").html("4-20个字符，请使用字母加数字或下划线组合。");
    $("p.modal").removeClass("red");
    $("#uname").removeClass("vali_success");
});
//当失去焦点时，验证正则，当验证通过时发送ajax请求查看数据库中是否已经有此用户存在
input.blur(function(){
    var $p=$(this).next().next();
    var $b=$(this).next();
    a=nameReg.test(input.val());
    if(a){
        $b.addClass("vali_success");
        $p.removeClass("red");

        //发送ajax请求注册用户
        //2:获取用户名
        var u=input.val();
        console.log(u)
    //3:发送ajax请求
        $.ajax({
            type:"GET",
            url:"data/reg.php",
            data:{uname:u},
            success:function(data){
                if(data.code==1){
                    //用户名不重复时，p元素内容为空
                    $("div.right p.modal").html("");
                }else{
                    $(".right p.modal").html(data.msg);
                }
            },
            error:function(err){
                //alert("网络连接错误，请检查");
                console.log(err)
            }
        });
    }else{
        //当正则未验证通过时，清除b元素的vali_success 并让p元素内容为“请输入正确的用户名”显示为红色，
        $b.removeClass("vali_success");
        $p.addClass("red");
        $p.html("请输入正确的用户名");
    }
});
//验证密码正则
var pwdReg=/^\w{6,20}$/;
var pwd=$("input[name=upwd]");
var b=0;
pwd.focus(function(){
    $("p.upwd").html("密码为6-20个字符，请使用字母加数字或下划线组合密码。");
    $("p.upwd").removeClass("red");
    $("#upwd").removeClass("vali_success");
});
pwd.blur(function() {
     b=pwdReg.test(pwd.val());
    if (b) {
        $("#upwd").addClass("vali_success");
        $("p.upwd").html("");
        return true;
    } else {
        //当正则未验证通过时，清除b元素的vali_success 并让p元素内容为“请输入正确的用户名”显示为红色，
        $("#upwd").removeClass("vali_success");
        $("p.upwd").addClass("red");
        $("p.upwd").html("请输入正确的密码");
        return false;
    }
});
//确认密码验证
//var reReg=/^\w{6,20}$/;
var re=$("input[name=repeat]");
var c=0;
re.focus(function(){
    $("p.repeat").html("请再次输入密码，两次输入必须一致。");
    $("p.repeat").removeClass("red");
    $("#repeat").removeClass("vali_success");
});
re.blur(function(){
    if(re.val()===pwd.val()){
        $("#repeat").addClass("vali_success");
        $("p.repeat").html("");
        c=true;
    }else{
        //当正则未验证通过时，清除b元素的vali_success 并让p元素内容为“请输入正确的用户名”显示为红色，
        $("#repeat").removeClass("vali_success");
        $("p.repeat").addClass("red");
        $("p.repeat").html("密码错误，两次输入必须一致。");
    }
});
////当以上3个input完全验证为true时，提交表单。发送ajax请求，向数据库增加一条用户记录。同时页面跳转到首页
    $("#bt-reg").click(function(){
        //判定checkbox的状态
      if(!check.checked){
          alert("请阅读《宝贝网用户注册协议》并勾选");
      }else{
        if(a&&b&&c) {
            var u = input.val();
            var p = pwd.val();
            $.ajax({
                type: "POST",
                url: "data/adduser.php",
                data: {uname: u, upwd: p},
                success: function (data) {
                    if (data.code == 1) {
                        location.href = "index.html";
                    }
                },
                error: function () {
                    alert("网络出错");
                }
            });
           }else{
            alert("用户名和密码及确认密码不能为空");
        }
         }
    });


//个人注册和商家注册的切换
    //为id 为store的div绑定单机事件



$("#store").click(function(){
    location.href="c_registe.html";
});
$("#person").click(function(){
    location.href="u_registe.html";
});

});
            //div第一个子元素更换背景图，div更换背景颜色，
            // div第二个子元素更换字体颜色，div第三个字元素更换背景颜色
            //更换上一个兄弟的背景图和颜色
            //var tar=$(this);
            //tar.removeClass("gray").addClass("blue");
            //tar.first().removeClass("two").addClass("twoblue");
            //tar.last().removeClass("b_gray").addClass("b_blue");
            //
            //tar.prev().removeClass("blue").addClass("gray");
            //tar.prev().first().removeClass("one").addClass("onegray");
            //tar.prev().last().removeClass("b_blue").addClass("b_gray");




