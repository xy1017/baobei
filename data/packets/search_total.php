<?php
require("../public.php");
//获取用户输入的关键词
@$content=$_REQUEST["content"] or die('{"code":-1,"msg":"关键词输入是必须的"}');
//创建sql语句并发送
 $sql = "SELECT count(*)  as page  FROM packets  WHERE pname LIKE '%$content%'";
 $result = mysqli_query($conn,$sql);
 //抓取多行
 $row = mysqli_fetch_assoc($result);
   //转换json发送
   echo json_encode($row);
?>