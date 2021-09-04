<?php 
    $log = $_POST['variable'];
    file_put_contents('userdata.log', $log, FILE_APPEND);
    
?>