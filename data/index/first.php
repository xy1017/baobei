<?php
require("../public.php");
//创建sql语句并发送
 $sql = "SELECT * FROM freegoods ORDER BY fouces DESC LIMIT 1,10";
 $result = mysqli_query($conn,$sql);
 //抓取多行
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
   //转换json发送
   echo json_encode($rows);
?>