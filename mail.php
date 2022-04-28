<?php 
    $_POST = json_decode(file_get_contents('php://input'), true);
    $errorArray = array();
    foreach($_POST as $key => $value){
        if (empty($value)){
            array_push($errorArray,['nameFild'=>$key,'textError'=>'Не заполнено']);
        }
    }
    echo json_encode($errorArray);
?>