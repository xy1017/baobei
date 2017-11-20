/**
 * Created by Administrator on 2017/8/21.
 */

$(()=> {
    //功能1：发送ajax请求获取当前页面中商品列表动态生成商品列表
        function page(pageno){
            $.ajax({
                url:"data/packets/packets.php",
                data:{pageno:pageno},
                type:"GET",
                success:function(data){
                    var html="";
                    $.each(data,function(idx,obj){
                        html+=`
                        <li>
                        <span class="red_icon">
                            <i>红包
                                <br/>
                                ${obj.packet}元
                            </i>
                        </span>
                        <dl>
                            <dt><a href="lip.html"><img src="${obj.pic}"/></a></dt>
                            <dd><a href="lip.html">${obj.pname}</a></dd>
                            <dd><span>红包: <b>${obj.packet}</b>元</span><span>单价: <b>${obj.price}</b>元</span></dd>
                            <dd><span>份数：<b>${obj.copies}</b>份</span><a href="lip.html">免费参与</a></dd>
                        </dl>
                    </li>
                        `;
                    });
                    $("ul.list").html(html);
                },

                error:function(){
                    alert("网络出错，请检查");
                }
            })


}
    //功能二：发送ajax获得总记录数
    function totalPage(){
    $.ajax({
        url:"data/packets/packets_total.php",
        success:function(data){
            var recound = data.page;
            var p = Math.ceil(recound/15);
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

//页面加载时显示第一页
page(1);
totalPage();
    //初始加载时的页码
        var m=1;
    //初始点击分类的变量
    var x=0;
    //功能点三:为页码添加点击事件加载对应页码的商品内容
    $("p.page").on("click","a",function(e){
        e.preventDefault();
        m=$(this).html();
        //当页面加载时调用page()函数给page()函数传参数m
        if(x==0){
            page(m);
        }else{
            //当点击对应分类时调用公共函数task()并传递点击分类的名称代码和点击时对应的页码数字
            task(x,m);
        }
        //当前页码突出显示
        $(this).addClass("hover").siblings().removeClass("hover");
    });

//点击宝贝分类中的不同分类按照大小生序排列，并显示在列表中
//点击综合时按红包大小排序
total.onclick=function(e){
    e.preventDefault();
    x=1;
    task(1,1);
    totalPage();
    $(this).addClass("clicked").siblings().removeClass("clicked");
};
    //点击价值时排序
 price.onclick=function(e){
     e.preventDefault();
        x=2;
        task(2,1);
     totalPage();
     $(this).addClass("clicked").siblings().removeClass("clicked");
};
order.onclick=function(e){
    e.preventDefault();
     x=2;
     task(2,1);
     totalPage();
    $(this).addClass("clicked").siblings().removeClass("clicked");
    };
copies.onclick=function(e){
    e.preventDefault();
    x=3;
    task(3,1);
    totalPage();
    $(this).addClass("clicked").siblings().removeClass("clicked");
};
packets.onclick=function(e){
    e.preventDefault();
    x=1;
    task(1,1);
    totalPage();
    $(this).addClass("clicked").siblings().removeClass("clicked");
};
    //拼接到ul的公共函数
    function task(a,m){
        $.ajax({
            url:"data/packets/test.php",
            data:{num:a,pageno:m},
            type:"GET",
            success:function(data){
                var html="";
                $.each(data,function(idx,obj){
                    html+=`
                        <li>
                        <span class="red_icon">
                            <i>红包
                                <br/>
                                ${obj.packet}元
                            </i>
                        </span>
                        <dl>
                            <dt><a href="lip.html"><img src="${obj.pic}"/></a></dt>
                            <dd><a href="lip.html">${obj.pname}</a></dd>
                            <dd><span>红包: <b>${obj.packet}</b>元</span><span>单价: <b>${obj.price}</b>元</span></dd>
                            <dd><span>份数：<b>${obj.copies}</b>份</span><a href="lip.html">免费参与</a></dd>
                        </dl>
                    </li>
                        `;
                });
                $("ul.list").html(html);
            },

            error:function(){
                alert("网络出错，请检查");
            }
        })
    }










});