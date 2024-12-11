<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request format']);
    exit();
}

// Validate required fields
$required_fields = ['name', 'email', 'type', 'query'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => 'All fields are required']);
        exit();
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit();
}

// Configure email settings
$to = 'joseph@platteneye.co.uk, daniel@platteneye.co.uk';
$subject = 'New Consultation Request from ' . htmlspecialchars($data['name']);

// Create HTML message
$message = "
<html>
<head>
  <title>New Consultation Request</title>
</head>
<body>
  <h2>New Consultation Request</h2>
  <p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>
  <p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>
  <p><strong>Type:</strong> " . htmlspecialchars($data['type'] === 'other' ? $data['otherType'] : $data['type']) . "</p>
  <p><strong>Query:</strong></p>
  <p>" . nl2br(htmlspecialchars($data['query'])) . "</p>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: noreply@platteneyecapital.com',
    'Reply-To: ' . $data['email'],
    'X-Mailer: PHP/' . phpversion()
];

// Send notification email
$mail_sent = mail($to, $subject, $message, implode("\r\n", $headers));

// Send confirmation email to user
$user_subject = 'Consultation Request Received - Platteneye Capital';
$user_message = "
<html>
<head>
  <title>Thank you for your consultation request</title>
</head>
<body>
  <h2>Thank you for your consultation request</h2>
  <p>Dear " . htmlspecialchars($data['name']) . ",</p>
  <p>We have received your inquiry and our team will get back to you within 24 hours.</p>
  <br>
  <p>Best regards,<br>Platteneye Capital Team</p>
</body>
</html>
";

$user_headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: noreply@platteneyecapital.com',
    'X-Mailer: PHP/' . phpversion()
];

$confirmation_sent = mail($data['email'], $user_subject, $user_message, implode("\r\n", $user_headers));

if ($mail_sent && $confirmation_sent) {
    echo json_encode(['success' => true, 'message' => 'Consultation request submitted successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send emails']);
}