<?php

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$passwordApply = $_POST['passwordApply'];
$phoneNumber = $_POST['phoneNumber'];

// проверяем, что поля заполнены
if (!isset($name) || !isset($email) || !isset($password) || !isset($passwordApply) || !isset($phoneNumber)) {
    echo "not enougth data";
    return;

// подтверждаем пароль
} else if (!($password == $passwordApply)) {
    echo "passwords not equal";
    return;
// валидируем почту
} else if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    echo "invalid email";
    return;
} else {
    $host = 'localhost';
    $db = 'flowersShop';
    $charset = 'utf8';
    $user = 'root';
    $dbPassword = '';
    
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $dbPassword);
    
    $query = $pdo->prepare("SELECT email FROM users WHERE email = :email");
    $query->execute(['email' => $email]);
    
    // почта занята
    if ($query->fetchColumn()) {
        echo "email";
        return;
    }
    
    // добавляем аккаунт в базу данных
    echo "prepare insert ";
    $query = $pdo->prepare("INSERT INTO users(name, email, password, phoneNumber, permission) VALUES(?, ?, ?, ?, ?)");
    $query->execute([$name, $email, md5($password), $phoneNumber, 20]);
    if (!$query) {
        echo "cant add to database";
    } else {
        echo "success";
    }
}

?>