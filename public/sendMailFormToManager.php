<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '/PHPMailer/src/PHPMailer.php';
require '/PHPMailer/src/Exception.php';
require '/PHPMailer/src/SMTP.php';

//Load Composer's autoloader
#require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
  if ($_SERVER["REQUEST_METHOD"] == "POST") { 
 
    // Instantiate PHPMailer
    $mail = new PHPMailer(true);
    $mail->SMTPDebug = 2;
    try {

		
			$message = '
<html>
<head>
</head>
<body>
    <h1>Запрос</h1>
	<dl>
		<dt>
			Фамилия
		</dt>
		<dd>
			' . $_POST['lastName'] . '
		</dd>
	</dl>
	
	<dl>
		<dt>
           Имя
		</dt>
		<dd>
			' . $_POST['firstName'] . '
		</dd>
	</dl>
	
	<dl>
		<dt>
           Отчество
		</dt>
		<dd>
			' . $_POST['patronymic'] . '
		</dd>
	</dl>
	
	<dl>
		<dt>
           Почта
		</dt>
		<dd>
			' . $_POST['email'] . '
		</dd>
	</dl>
	
	<dl>
		<dt>
           Место работы
		</dt>
		<dd>
			' . $_POST['workplace']  . '
		</dd>
	</dl>
	
	<dl>
		<dt>
           Должность
		</dt>
		<dd>
			' . $_POST['position']  . '
		</dd>
	</dl>
	
	<dl>
		<dt>
           Город
		</dt>
		<dd>
			' . $_POST['city']  . '
		</dd>
	</dl>
	
	<dl>
		<dt>
           Терапевтическая область
		</dt>
		<dd>
			' . $_POST['therapeuticArea']  . '
		</dd>
	</dl>
	
	
	<dl>
		<dt>
           Препарат
		</dt>
		<dd>
			' . $_POST['preparation']  . '
		</dd>
	</dl>
		
	<dl>
		<dt>
           Вопрос
		</dt>
		<dd>
			' . $_POST['question']  . '
		</dd>
	</dl>

	<dl>
		<dt>
			Пациент принимает препарат компании Такеда?
		</dt>
		<dd>
			' . $_POST['pills']  . '
		</dd>
	</dl>
	<dl>
		<dt>
		Вопрос связан с нежелательным явлением или с беременностью? 
		</dt>
		<dd>
			' . $_POST['pregnancy']  . '
		</dd>
	</dl>
	<dl>
		<dt>
		Вопрос связан с применением препарата не по инструкции?
		</dt>
		<dd>
			' . $_POST['manual']  . '
		</dd>
	</dl>
		
</body>
</html>
';

        #$mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'mymspace7@gmail.com';                     // SMTP username
        $mail->Password   = 'MySpace7';                        // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for 

        // Recipients
        $mail->setFrom('mymspace7@gmail.com', 'Site request');

         $mail->addAddress('kz.medinfo@takeda.com');                   // Add a recipient
$mail->CharSet = "UTF-8";
$mail->Encoding = 'base64';
        // Content
        $mail->isHTML(true);                                       
        $mail->Subject = "My Med Form";
        $mail->Body    = $message;

        $mail->send();
       header("Location: success");
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}else {
    // Redirect if accessed directly
    header("Location: /");
    exit;
}
?>