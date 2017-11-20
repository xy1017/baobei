<?php
require("public.php");
@$u=$_REQUEST["uname"] or die('{"code":-1,"msg":"用户名是必须的"}');
@$p=$_REQUEST["upwd"] or die('{"code":-2,"msg":"密码是必须的"}');
 $sql = "INSERT INTO user VALUES(null,'$u','$p','images/noavatar_middle.gif')";
 $result = mysqli_query($conn,$sql);
   if($result==true){
    echo '{"code":1,"msg":"添加成功"}';
   }else{
    echo '{"code":-3,"msg":"添加失败"}';
   }
?>