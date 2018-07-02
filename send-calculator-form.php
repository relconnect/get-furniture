<?php
$place = trim(strip_tags($_POST['shkafPlace'])); //В какой комнате разместить
$contain = implode(',', $_POST['ZshkafContain']); // массив Что будет хранится в шкафу
$dt = date("Y-m-d H:i:s"); // Вывод даты и времени
$type = trim(strip_tags($_POST['shkafType'])); // Тип шкафа купе
$deep= trim(strip_tags($_POST['deep'])); // Глубина шкафа
$height = trim(strip_tags($_POST['height'])); // Высота шкафа
$width =trim(strip_tags($_POST['width'])); // Ширина шкафа
$cover = implode(',', $_POST['ZshkafCover']); // Наполнение дверей купе
$terms = implode(',', $_POST['Zdopusloviya']); //Доп условия
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
                        <p>Комната: '.$place.'</p>
                        <p>Тип шкафа: '.$type.'</p>
                        <p>Планируем хранить: '.$contain.'</p>
                        <p>Глубина: '.$deep.' см.</p>
                        <p>Высота: '.$height.' см.</p>
                        <p>Ширина: '.$width.' см.</p>
                        <p>Тип фасадов: '.$cover.'</p>
                        <p>Дополнительные условия покупки: '.$terms.'</p>                                                                                        
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Просчет шкафа <info@get-best.com.ua>\r\n";
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
$msg = "Просчет шкафа купе"."%0A"."Дата: $dt"."%0A"."Имя: $name"."%0A"."Телефон: $phone"."%0A"."Комната: $place"."%0A"."Тип шкафа: $type"."%0A"."Планируем хранить: $contain"."%0A"."Глубина: $deep"."%0A"."Высота: $height"."%0A"."Ширина: $width"."%0A"."Тип фасадов: $cover"."%0A"."Доп условия: $terms";
file_get_contents("https://api.telegram.org/bot570437910:AAEwPpGQmtVYaeRsLwiUSVr1crfjdjQ8WY4/sendMessage?chat_id=@get123best123shkaf&text=$msg");
