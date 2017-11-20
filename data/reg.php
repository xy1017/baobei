<?php
require("public.php");
@$u=$_REQUEST["uname"] or die('{"code":-1,"msg":"用户名是必须的"}');
 $sql = "SELECT * FROM user WHERE uname='$u'";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
   if($row!=null){
    echo '{"code":-3,"msg":"用户名已存在，请重新输入"}';
   }else{
    echo '{"code":1,"msg":"登录正确"}';
   }
?>