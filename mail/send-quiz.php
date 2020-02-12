<?php
if ( !empty($_POST['phone']) && !empty($_POST['subject']) ) {
	$return_message = "";

	$phone          = trim(htmlspecialchars($_POST['phone']));
	$subject        = trim(htmlspecialchars($_POST['subject']));
	$color          = $_POST['color'];
	$factor         = $_POST['factor'];
	$sum            = $_POST['sum'];
	$present        = $_POST['present'];
	$subject_letter = 'Заявка с сайта avtorecaro.com.ua';

	// $to = "suvakolha@gmail.com, arbitr6p@gmail.com";
	$to = "chigrin.work@gmail.com";

	$message = "
	<html> 
		<head> 
			<title>$subject_letter</title> 
		</head> 
		<body>
			<table>
				<tr><td><b>Тема:</b></td><td>$subject</td></tr>
				<tr><td><b>Телефон:</b></td><td>$phone</td></tr>
				<tr><td><b>В каки цветах Вы хотите?</b></td><td>$color</td></tr>
				<tr><td><b>Самый важный фактор</b></td><td>$factor</td></tr>
				<tr><td><b>На какую сумму расчитываете?</b></td><td>$sum</td></tr>
				<tr><td><b>Выберите свой подарок</b></td><td>$present</td></tr>
			</table>
		</body> 
	</html>"; 

	$headers  = "From: noreply@avtorecaro.com.uaa\r\n";
	$headers .= "Content-type: text/html; charset=utf-8 \r\n";

	mail($to, $subject_letter, $message, $headers);
		// $return_message = "send_success";
		// $return_message = "send_error";


	//AMO CRM
	require_once __DIR__ . '/amocrm.phar';

	try {
		$amo = new \AmoCRM\Client('olegkysluk', 'olegkysluk@i.ua', '3ae34d3bc8247a10b5ffb4cde0e3c5435090343c');

		$lead = $amo->lead;
		$lead['name'] = $subject;
		$lead['responsible_user_id'] = 3646585;
		$lead['status_id'] = 28935007;
		$lead['tags'] = ['avtorecaro.com.ua'];
		// $lead->addCustomField(576445, [["$marka"]]);
		$lead->addCustomField(576457, [["$subject"]]);
		$lead->addCustomField(576617, [["$color"]]);
		$lead->addCustomField(576619, [["$factor"]]);
		$lead->addCustomField(576621, [["$sum"]]);
		$lead->addCustomField(576623, [["$present"]]);
		$lead_id = $lead->apiAdd();

		$contact = $amo->contact;
		$contact['name'] = $subject;
		$contact['linked_leads_id'] = $lead_id;
		$contact['responsible_user_id'] = 3646585;
		$contact['tags'] = ['avtorecaro.com.ua'];
		$contact->addCustomField(576407, [[$phone,'WORK']]);
		$id = $contact->apiAdd();


		// Add Task
		// $task = $amo->task;
		// $task['element_id'] = $lead_id;
		// $task['responsible_user_id'] = $resp_user_id;
		// $task['element_type'] = 2;
		// $task['task_type'] = 1;
		// $task['tags'] = ['Заявка с сайта'];
		// $task['complete_till'] = '+5 HOUR';
		// $task['text'] = 'Перезвонить через 15 минут. Телефон - '.$phone.' Имя - '.$customer_name;
		// $task['complete_till'] = '+15 MINUTES';
		// $id_task = $task->apiAdd();
		$return_message = "send_success";
	} catch (\AmoCRM\Exception $e) {
		printf('Error (%d): %s', $e->getCode(), $e->getMessage());
	}
	//end AMO CRM


	echo $return_message;
	exit();
}

?>