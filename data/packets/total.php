<?php
require("../public.php");
 $sql = "SELECT * FROM packets ORDER BY packet";
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
   //转换json发送
    echo json_encode($rows);
?>