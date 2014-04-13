<?php

$name = $_POST['name']; // contain name of person
$email = $_POST['email']; // Email address of sender 
//$web = $_POST['http://www.awkwardturtlemedia.com']; // Your website URL
$body = $_POST['text']; // Your message 
$receiver = "info@awkwardturtlemedia.com" ; // hardcorde your email address here - This is the email address that all your feedbacks will be sent to /
//$receiver = "toant713@gmail.com" ; // hardcorde your email address here - This is the email address that all your feedbacks will be sent to 
if (!empty($name) && !empty($email) && !empty($body)) {
    $body = "Name:{$name}\n\nComments:{$body}";
	$send = mail($receiver, 'Award Turtle Media Inquiry', $body, "From: {$email}");
    if ($send) {
        echo 'true'; //if everything is ok,always return true , else ajax submission won't work
    }

}

?>