/**
 * Created by Administrator on 2017/8/21.
 */

$(()=> {
    //功能1：发送ajax请求获取当前页面中商品列表动态生成商品列表
        function page(pageno){
            $.ajax({
                url:"data/freegoods/freegoods.php",
                data:{pageno:pageno},
                type:"GET",
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

                error:function(){
                    alert("网络出错，请检查");
                }
            })


}
    //功能二：发送ajax获得总记录数
    function totalPage(){
    $.ajax({
        url:"data/freegoods/freegoods_total.php",
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
////点击商品列表跳转到详情页
//    $("ul.list").on('click','li',(e)=>{
//        e.preventDefault();
//        var tar=$(e.target);
//        $.ajax({
//            data:{fid:?},
//            type:"GET",
//            success:function(data){
//                var html="";
//                $.each(data,function(idx,obj){
//                    html+=`
//            <h3 class="title">${obj.name}</h3>
//            <div class="details">
//                <a href="#"><img src="${obj.pic}" alt=""/></a>
//                <div class="content ">
//                    <p>单品试用担保金：<b>&yen;${obj.price}</b>元</p>
//                    <div class="money">
//                        <p> (商家已存入总试用担保金：<span>&yen;${obj.bandao}</span> 元，请放心申请。)</p>
//                        <p>剩余时间：活动已结束
//                    </div>
//                    <div class="left-right">
//                        <!-- 左侧内容-->
//                        <div>
//                            <p>试用份数：<b>${obj.copies} </b>份</p>
//                            <p>邮费状态：${obj.post}</p>
//                            <p>已关注：<b>${obj.fouces} </b>次 已申请：<b>${obj.applied} </b>人</p>
//                            <a href="#">已结算</a>
//                            <div class="share">
//                                分享到：
//                                <a href="#"></a>
//                                <a href="#"></a>
//                                <a href="#"></a>
//                                <a href="#"></a>
//                                <a href="#"></a>
//                                <div class="plus">
//                                    <a href="#"></a>
//                                    <div class="block">
//                                      <h4>分享到</h4>
//                                      <ul>
//                                          <li><a href="#">一键分享</a></li>
//                                          <li><a href="#">QQ空间</a></li>
//                                          <li><a href="#">新浪微博</a></li>
//                                          <li><a href="#">百度云收藏</a></li>
//                                          <li><a href="#">微信</a></li>
//                                          <li><a href="#">人人网</a></li>
//                                          <li><a href="#">腾讯微博</a></li>
//                                          <li><a href="#">百度相册</a></li>
//                                          <li><a href="#">开心网</a></li>
//                                          <li><a href="#">腾讯朋友</a></li>
//                                          <li><a href="#">百度贴吧</a></li>
//                                          <li><a href="#">豆瓣网</a></li>
//                                          <li><a href="#">百度新首页</a></li>
//                                          <li><a href="#">QQ好友</a></li>
//                                          <li><a href="#">和讯微博</a></li>
//                                          <li><a href="#">百度中心</a></li>
//                                      </ul>
//                                      <p>
//                                          <a href="#">更多...</a>
//                                      </p>
//                                    </div>
//                                </div>
//                                <a href="#"></a>
//                            </div>
//                        </div>
//                        <!-- 右侧流程-->
//                        <div>
//                            <p class="move">试用流程：</p>
//                            <div class="api">
//                                <p></p>
//                                <div>
//                                    <p><a href="#">获得试用资格</a></p>
//                                    <p><a href="#">以 <span>${obj.price}</span>元到指定平台购买试用品</a></p>
//                                    <p><a href="#">提交订单编号</a></p>
//                                    <p><a href="#">提交中肯评价截图</a></p>
//                                    <p><a href="#">返还 <span>${obj.price}</span>元到您联网平台账号</a></p>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </div>
//
//                    `;
//                });
//               $("div.lip").html=html;
//
//            },
//            error:function(){
//                alert("网络出错，请重试");
//            }
//
//        })
//
//    });

//点击综合时排序
total.onclick=function(e){
    e.preventDefault();
    x=1;
    task(1,1);
    totalPage();
    $(this).addClass("clicked").siblings().removeClass("clicked");
};
//    //点击价值时排序
 price.onclick=function(e){
     e.preventDefault();
        x=4;
        task(4,1);
     totalPage();
     $(this).addClass("clicked").siblings().removeClass("clicked");
};
    fouces.onclick=function(e){
    e.preventDefault();
     x=3;
     task(3,1);
     totalPage();
    $(this).addClass("clicked").siblings().removeClass("clicked");
    };
copies.onclick=function(e){
    e.preventDefault();
    x=4;
    task(4,1);
    totalPage();
    $(this).addClass("clicked").siblings().removeClass("clicked");
};
restTime.onclick=function(e){
    e.preventDefault();
    x=3;
    task(3,1);
    totalPage();
    $(this).addClass("clicked").siblings().removeClass("clicked");
};

    //拼接到ul的公共函数
    function task(a,m){
        $.ajax({
            url:"data/freegoods/test.php",
            data:{num:a,pageno:m},
            type:"GET",
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

            error:function(){
                alert("网络出错，请检查");
            }
        })
    }










});