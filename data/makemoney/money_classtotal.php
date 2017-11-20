<?php
require("../public.php");
//获取参数code
$code=$_REQUEST["code"]or die('{"code":-1,"msg":"天天赚商品分类是必须的"}');
//创建sql语句并发送
if($code==1){
 $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='潮流女装')";
 }else if($code==2){
 $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='精品男装')";
 }else if($code==3){
  $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='时尚配饰')";
 }else if($code==4){
  $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='美食特产')";
 }else if($code==5){
   $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='数码家电')";
 }else if($code==6){
    $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='鞋子箱包')";
 }else if($code==7){
    $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='美容护肤')";
 }else if($code==8){
      $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='综合使用')";
 }else if($code==9){
        $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='母婴用品')";
 }else if($code==10){
        $sql = "SELECT count(*)  as page  FROM makemoney  WHERE cid=(SELECT cid FROM classify WHERE cname='家用日具')";
   }
 $result = mysqli_query($conn,$sql);
 //抓取多行
 $row = mysqli_fetch_assoc($result);
   //转换json发送
   echo json_encode($row);
?>