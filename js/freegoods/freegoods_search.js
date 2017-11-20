/**
 * Created by Administrator on 2017/8/21.
 */
$(()=>{
    //keyword.value="";
    function totalPage(key){
    $.ajax({
        url:"data/freegoods/search_total.php",
        data:{content:key},
        success:function(data){
            var recound = data.page;
            var p = Math.ceil(recound/16);
            //拼字符串 1 2 3 4
            var html='<a href="#" class="hover">1</a>';
            for(var i=2;i<=p;i++){
                html += `<a href="#">${i}</a>`;
            }
            $("p.page").html(html);
        },
        error:function(){
            alert("网络出错，请检查");
        }
    });
    }
        var m=1;
    //初始点击分类的变量
    //功能点三:为页码添加点击事件加载对应页码的商品内容
    $("p.page").on("click","a",function(e){
        e.preventDefault();
        m=$(this).html();
            //当点击对应分类时调用公共函数task()并传递点击分类的名称代码和点击时对应的页码数字
            task(m,key);
        //当前页码突出显示
        $(this).addClass("hover").siblings().removeClass("hover");
    });

search.onclick=function(){
    //点击搜索按钮获取用户输入的关键词
    var key=$("#keyword").val();
        task(1,key);
        totalPage(key);
    //发送ajax获得总记录数
    };
    //拼接到ul的公共函数
    function task(m,key) {
        $.ajax({
            url: "data/freegoods/search.php",
            data: {pageno: m,content:key},
            type: "GET",
            success:function(data){
                var html="";
                $.each(data,function(idx,obj){
                    html+=`
                        <li>
                        <dl>
                            <dt><a href="led-light.html"><img src="${obj.fpic}" alt=""/></a></dt>
                            <dd><a href="led-light.html">${obj.fname}</a></dd>
                            <dd><span>份数: <b>${obj.copies}</b></span><span>已关注: <b>${obj.fouces}</b>次</span></dd>
                            <dd><span>邮费：<b>${obj.post}</b></span><img src="${obj.vip}" alt=""/></dd>
                            <dd><a href="led-light.html">免费申请</a></dd>
                        </dl>
                    </li>
                        `;
                });
                $("ul.list").html(html);
            },

            error: function () {
                alert("网络出错，请检查");
            }
        })
    };









});