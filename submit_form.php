<?php
// Email configuration
$recipient_email = "ceomeriise@mcehassan.ac.in";

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $program_interest = htmlspecialchars(trim($_POST['program_interest'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Validate form data
    if (empty($name) || empty($email) || empty($program_interest) || empty($message)) {
        die("Error: All fields are required.");
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Error: Invalid email address.");
    }

    // Prepare email content
    $subject = "New Contact Form Submission from ME-RIISE Foundation";
    
    $email_body = "You have received a new message from the Contact Us form.\n\n";
    $email_body .= "Full Name: " . $name . "\n";
    $email_body .= "Email Address: " . $email . "\n";
    $email_body .= "Program Interest: " . $program_interest . "\n";
    $email_body .= "Message:\n" . $message . "\n\n";
    $email_body .= "---\n";
    $email_body .= "This is an automated message from your website contact form.";

    // Set headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email to recipient
    if (mail($recipient_email, $subject, $email_body, $headers)) {
        // Send confirmation email to user
        $user_subject = "We received your message - ME-RIISE Foundation";
        $user_body = "Dear " . $name . ",\n\n";
        $user_body .= "Thank you for contacting ME-RIISE Foundation. We have received your message and will get back to you soon.\n\n";
        $user_body .= "Program Interest: " . $program_interest . "\n";
        $user_body .= "Message: " . $message . "\n\n";
        $user_body .= "Best regards,\n";
        $user_body .= "ME-RIISE Foundation Team\n";
        $user_body .= "Email: ceomeriise@mcehassan.ac.in\n";
        $user_body .= "Phone: +91 9448179074";

        $user_headers = "From: ceomeriise@mcehassan.ac.in\r\n";
        $user_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        mail($email, $user_subject, $user_body, $user_headers);

        // Display success message
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message Sent Successfully</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    width: 50%;
                    margin: 50px auto;
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .success-message {
                    color: #28a745;
                    font-size: 18px;
                    margin: 20px 0;
                }
                .back-link {
                    margin-top: 20px;
                }
                .back-link a {
                    display: inline-block;
                    padding: 10px 20px;
                    background: #28a745;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .back-link a:hover {
                    background: #218838;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Message Sent Successfully!</h2>
                <div class="success-message">
                    <p>Thank you for contacting ME-RIISE Foundation.</p>
                    <p>Your message has been sent to ceomeriise@mcehassan.ac.in</p>
                    <p>We will get back to you soon.</p>
                </div>
                <div class="back-link">
                    <a href="contactus.html">Back to Contact Form</a>
                </div>
            </div>
        </body>
        </html>
        <?php
    } else {
        die("Error: Failed to send email. Please try again later.");
    }
} else {
    // If not a POST request, redirect to contact form
    header("Location: contactus.html");
    exit;
}
?>
