/**
 * Created by HY on 2017/8/13.
 */
var zero;
var p=document.getElementById("time");
var over=document.getElementById("over");
function task(){
    var end=new Date("2017/10/10");
    var now=new Date();
    var s=parseInt((end-now)/1000);
    var d=parseInt(s/3600/24);
    var h=parseInt(s%(3600*24)/3600);
    var m=parseInt(s%3600/60);
    var s=s%60;
    zero=end-now;
    p.innerHTML=`剩余时间：<span>${d}</span>天 <span>${h}</span>时 <span>${m}</span>分 <span>${s}</span>秒`;
};
task();
var timer=setInterval(task,1000);
if(zero<=0){
    clearInterval(timer);
    p.innerHTML="";
    timer=null;
    over.innerHTML="活动结束";
}
