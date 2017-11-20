/**
 * Created by Administrator on 2017/8/21.
 */
$(()=> {
    //功能1：发送ajax请求获取当前页面中商品列表动态生成商品列表
        function page(pageno){
            $.ajax({
                url:"data/makemoney/makemoney.php",
                data:{pageno:pageno},
                type:"GET",
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

                error:function(){
                    alert("网络出错，请检查");
                }
            })


}
    //功能二：发送ajax获得总记录数
function totalPage(){
    $.ajax({
        url:"data/makemoney/makemoney_total.php",
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
//页面加载时显示第一页
page(1);
totalPage();

    //功能点三:为页码添加点击事件加载对应页码的商品内容
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
//点击综合时排序
total.onclick=function(e){
    e.preventDefault();
    x=1;
    task(1,1);
    totalPage();
    $(this).addClass("current").siblings().removeClass("current");
};
//点击总分数时排序
copies.onclick=function(e){
    e.preventDefault();
    x=2;
    task(2,1);
    totalPage();
    $(this).addClass("current").siblings().removeClass("current");
};
packet.onclick=function(e){
    e.preventDefault();
    x=1;
    task(1,1);
    totalPage();
    $(this).addClass("current").siblings().removeClass("current");
};
rest.onclick=function(e){
    e.preventDefault();
    x=3;
    task(3,1);
    totalPage();
    $(this).addClass("current").siblings().removeClass("current");
};

//拼接到ul的公共函数
function task(a,m){
    $.ajax({
        url:"data/makemoney/test.php",
        data:{num:a,pageno:m},
        type:"GET",
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

        error:function(){
            alert("网络出错，请检查");
        }
    })
}











});