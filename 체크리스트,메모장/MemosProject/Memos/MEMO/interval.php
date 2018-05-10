<?php
file_put_contents('./data/'.$_POST['listContent'],$_POST['listContent']);
header('Location: /MemosProject/MemosProject/Memos/asset/Memos.php');
//file_put_contents('./data/'.$_POST['title'],$_POST['description']);
//header('Location: /MemosProject/MemosProject/Memos/MEMO/data'.$_POST['listValue']);
?>