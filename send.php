<?php
$dt = date("Y-m-d H:i:s"); // Вывод даты и времени
$name = trim(strip_tags($_POST['name']));
$phone =  trim(strip_tags($_POST['phone']));
if((isset($phone)&&$_POST['phone']!='')){
    $to = 'info@get-best.com.ua';
    $subject = 'Заявка на подбор шкафа-купе! сайт Get-best.com.ua';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Дата: '.$dt.'</p>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$phone.'</p>                                                                   
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: info@get-best.com.ua\r\n";
    $response = [];
    if(mail($to, $subject, $message, $headers)){
        $response = ['success'=> true,'name'=>$name,'phone'=>$phone];
    } else {
        $response = ['success'=> false,'message'=>'Что-то пошло не так! Попробуйте отправить сообщение позже !'];
    }
    $response['success'] ? header('HTTP/1.1 200 OK') : header('HTTP/1.1 500 Internal Server Error') ;
    header('Content-Type: application/json');
    echo json_encode($response);    
}

$msg = "Подбор шкафа купе!"."%0A"."Дата: $dt"."%0A"."Имя: $name"."%0A"."Телефон: $phone";
file_get_contents("https://api.telegram.org/bot570437910:AAEwPpGQmtVYaeRsLwiUSVr1crfjdjQ8WY4/sendMessage?chat_id=@get123best123shkaf&text=$msg");
