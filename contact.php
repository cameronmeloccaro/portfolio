<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];
    $to = "cameronmeloccaro@gmail.com";
    $subject = "New Message from Contact Form";
    $message = "Name: ".$name."\n\nEmail: ".$email."\n\nMessage:\n".$comment;
    $headers = "From: ".$email;

    if(mail($to, $subject, $message, $headers)){
        echo "<p>Thank you for your message!</p>";
    } else{
        echo "<p>Sorry, something went wrong. Please try again later.</p>";
    }
}
?>
