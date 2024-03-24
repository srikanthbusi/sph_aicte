<?php

$servername = "your_server_name";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process registration form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["yourname"];
    $email = $_POST["emailaddress"];
    $password = $_POST["password"];
    $phone = $_POST["phone"];
    $gender = $_POST["gender"];

    $sql = "INSERT INTO user_info (name, email, password, phone, gender) VALUES ('$name', '$email', '$password', '$phone', '$gender')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close database connection
$conn->close();

?>
