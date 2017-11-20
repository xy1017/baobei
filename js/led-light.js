/**
 * Created by HY on 2017/8/13.
 */
var zero;
var p=document.getElementById("time");
var apply=document.getElementById("apply");
function task(){
    var end=new Date("2017/10/10");
    var now=new Date();
    var s=parseInt((end-now)/1000);
    var d=parseInt(s/3600/24);
    var h=parseInt(s%(3600*24)/3600);
    var m=parseInt(s%3600/60);
    var s=s%60;
    zero=end-now;
    p.innerHTML=`剩余时间：<b>${d}</b>天 <b>${h}</b>时 <b>${m}</b>分 <b>${s}</b>秒`;
};
task();
var timer=setInterval(task,1000);
if(zero<=0){
    clearInterval(timer);
    p.innerHTML="";
    timer=null;
    apply.innerHTML="活动结束";
}
