import React from "react";

const EmailTemplate = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Subscribing</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            max-width: 100px;
        }
        .content {
            margin: 20px 0;
            text-align: center;
        }
        .content h1 {
            color: #333;
        }
        .content p {
            color: #666;
            line-height: 1.6;
        }
        .social-icons {
            text-align: center;
            margin-top: 20px;
        }
        .social-icons a {
            margin: 0 10px;
            display: inline-block;
            color: #666;
            text-decoration: none;
        }
        .social-icons a img {
            width: 30px;
            height: 30px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="content">
            <h1>Thank You for Subscribing!</h1>
            <p>Hi there,</p>
            <p>Thank you for subscribing to our newsletter! We're excited to have you on board. Stay tuned for the latest news, updates, and blog posts directly to your inbox.</p>
            <p>If you have any questions or suggestions, feel free to reach out to us.</p>
            <p>Best regards,<br>Tanmay Kashyap</p>
        </div>
        <div class="social-icons">
            <a href="https://github.com/nikhilnigamnik" target="_blank">
                <img src="https://image-url-for-github-icon" alt="GitHub">
            </a>
            <a href="https://www.linkedin.com/in/nikhil-nigam-a2454b1a9" target="_blank">
                <img src="https://image-url-for-linkedin-icon" alt="LinkedIn">
            </a>
            <a href="https://twitter.com/nikhil_nigamnik" target="_blank">
                <img src="https://image-url-for-twitter-icon" alt="Twitter">
            </a>
        </div>
    </div>
</body>
</html>

    `;
};

export default EmailTemplate;
