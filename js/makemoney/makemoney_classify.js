/**
 * Created by Administrator on 2017/8/21.
 */
$(()=>{
   // $("#keyword").val("");
    //发送ajax获得总记录数
    var x=1;
    function totalPage(x){
    $.ajax({
        url:"data/makemoney/money_classtotal.php",
        data:{code:x},
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
            task(x,m);
        //当前页码突出显示
        $(this).addClass("hover").siblings().removeClass("hover");
    });

//点击红包商品分类中的不同分类按照大小生序排列，并显示在列表中
//点击女装时排序
dress.onclick=function(e){
    e.preventDefault();
        x=1;
        task(1,1);
        totalPage(1);
    $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    suit.onclick=function(e){
        e.preventDefault();
        x=2;
        task(2,1);
        totalPage(2);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    decoration.onclick=function(e){
        e.preventDefault();
        x=3;
        task(3,1);
        totalPage(3);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    food.onclick=function(e){
        e.preventDefault();
        x=4;
        task(4,1);
        totalPage(4);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    electrical.onclick=function(e){
        e.preventDefault();
        x=5;
        task(5,1);
        totalPage(5);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    shoes.onclick=function(e){
        e.preventDefault();
        x=6;
        task(6,1);
        totalPage(6);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    cosmetics.onclick=function(e){
        e.preventDefault();
        x=7;
        task(7,1);
        totalPage(7);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    others.onclick=function(e){
        e.preventDefault();
        x=8;
        task(8,1);
        totalPage(8);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    baby.onclick=function(e){
        e.preventDefault();
        x=9;
        task(9,1);
        totalPage(9);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    daily.onclick=function(e){
        e.preventDefault();
        x=10;
        task(10,1);
        totalPage(10);
        $(this).addClass("current").parent().siblings().children().removeClass("current");
    };
    //拼接到ul的公共函数
    function task(a,m) {
        $.ajax({
            url: "data/makemoney/class_detail.php",
            data: {num: a, pageno: m},
            type: "GET",
            success:function(data){
                var html="";
                $.each(data,function(idx,obj){
                    html+=`
                        <li>
                        <dl>
                            <dt><a href="back.html"><img src="${obj.pic}" alt=""/></a></dt>
                            <dd><a href="back.html">${obj.mname}</a></dd>
                            <dd><span>总份数: <b>${obj.copies}</b></span><span>剩余: <b>${obj.rest}</b>份</span></dd>
                            <dd><span>奖励：<b>￥${obj.packet}元</b></span></dd>
                            <dd><a href="back.html">做任务</a></dd>
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