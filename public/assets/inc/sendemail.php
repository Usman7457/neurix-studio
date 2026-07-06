<?php

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

/*
|--------------------------------------------------------------------------
| Config
|--------------------------------------------------------------------------
*/

define("WEBSITE_EMAIL", "your-email@mail.com");
define("WEBSITE_TITLE", "Bemox Contact Form");
define("RECIPIENT_NAME", "John Doe");
define("RECIPIENT_EMAIL", "mail@mail.com");
define("SMTP_HOST", "smtp.gmail.com");
define("SMTP_PORT", 587);
define("SMTP_USERNAME", "your-email@gmail.com");
define("SMTP_PASSWORD", "your-app-password");

/*
|--------------------------------------------------------------------------
| Sanitize Inputs
|--------------------------------------------------------------------------
*/

$name = isset($_POST['name'])
  ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name'])
  : "";

$senderEmail = isset($_POST['email'])
  ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)
  : "";

$phone = isset($_POST['phone'])
  ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone'])
  : "";

$services = isset($_POST['services'])
  ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['services'])
  : "";

$subject = isset($_POST['subject'])
  ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['subject'])
  : "";

$address = isset($_POST['address'])
  ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['address'])
  : "";

$website = isset($_POST['website'])
  ? filter_var($_POST['website'], FILTER_SANITIZE_URL)
  : "";

$message = isset($_POST['message'])
  ? strip_tags($_POST['message'])
  : "";

/*
|--------------------------------------------------------------------------
| Validate Required Fields
|--------------------------------------------------------------------------
*/

if (
  empty($name) ||
  empty($senderEmail) ||
  empty($message) ||
  !filter_var($senderEmail, FILTER_VALIDATE_EMAIL)
) {

  echo "<div class='inner error'>
            <p class='error'>
                Please fill all required fields correctly.
            </p>
          </div>";

  exit;
}

/*
|--------------------------------------------------------------------------
| Email Body
|--------------------------------------------------------------------------
*/

$mail_subject = 'A contact request sent by ' . $name;

$body = "Name: {$name}\r\n";
$body .= "Email: {$senderEmail}\r\n";

if ($phone) {
  $body .= "Phone: {$phone}\r\n";
}

if ($services) {
  $body .= "Services: {$services}\r\n";
}

if ($subject) {
  $body .= "Subject: {$subject}\r\n";
}

if ($address) {
  $body .= "Address: {$address}\r\n";
}

if ($website) {
  $body .= "Website: {$website}\r\n";
}

$body .= "\r\nMessage:\r\n{$message}";

/*
|--------------------------------------------------------------------------
| Send Mail with PHPMailer
|--------------------------------------------------------------------------
*/

$mail = new PHPMailer(true);

try {

  /*
    |--------------------------------------------------------------------------
    | SMTP Configuration
    |--------------------------------------------------------------------------
    */

  $mail->isSMTP();

  // SMTP Server
  $mail->Host = SMTP_HOST;

  // Enable SMTP Authentication
  $mail->SMTPAuth = true;

  // Your Email
  $mail->Username = SMTP_USERNAME;

  // App Password
  $mail->Password = SMTP_PASSWORD;

  // Encryption
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

  // Port
  $mail->Port = SMTP_PORT;

  /*
    |--------------------------------------------------------------------------
    | Email Settings
    |--------------------------------------------------------------------------
    */

  $mail->setFrom(
    WEBSITE_EMAIL,
    WEBSITE_TITLE
  );

  $mail->addAddress(
    RECIPIENT_EMAIL,
    RECIPIENT_NAME
  );

  // Reply-To User
  $mail->addReplyTo(
    $senderEmail,
    $name
  );

  $mail->Subject = $mail_subject;

  $mail->Body = $body;

  $mail->isHTML(false);

  /*
    |--------------------------------------------------------------------------
    | Send Email
    |--------------------------------------------------------------------------
    */

  $mail->send();

  echo "<div class='inner success'>
            <p class='success'>
                Thanks for contacting us. We will contact you ASAP!
            </p>
          </div>";
} catch (Exception $e) {

  error_log('Mailer Error: ' . $mail->ErrorInfo);

  http_response_code(500);

  echo "<div class='inner error'>
            <p class='error'>
                Message could not be sent. Please try again later.
            </p>
          </div>";
}
