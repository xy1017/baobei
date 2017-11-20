<?php
require("../public.php");
//创建sql语句并发送
 $sql = "SELECT count(*) as page FROM packets";
 $result = mysqli_query($conn,$sql);
 //抓取多行
 $row = mysqli_fetch_assoc($result);
   //转换json发送
   echo json_encode($row);
?>