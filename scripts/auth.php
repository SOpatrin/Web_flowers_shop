<?php
$root = $_SERVER['DOCUMENT_ROOT'];
include("$root/scripts/loadProfile.php");

session_start();

$email = $_POST['email'];
$password = md5($_POST['password']);

// проверяем данные переданные в запросе
if (!isset($email) || !isset($password)) {
    if (!isset($_SESSION['user_id'])) {
        echo '<a id="login-link" href="" class="nav-link text-left text-nowrap">Войти</a>';
        return;
    } else {
        loadProfile($_SESSION['user_id']);
        return;
    }
} else {
    
    // ищем совпадения данных в запросе и в базе данных
    $host = 'localhost';
    $db = 'flowersShop';
    $charset = 'utf8';
    $user = 'root';
    $dbPassword = '';
    
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $dbPassword);
    
    $query = $pdo->prepare("SELECT id FROM users WHERE email = :email AND password = :password");
    $query->execute(['email' => $email,
                    'password' => $password]);
    $id = $query->fetchColumn();
    if ($id != null) {
        $_SESSION['user_id'] = $id;
        loadProfile($id);
    } else {
        echo '<a id="login-link" href="" class="nav-link text-left text-nowrap">Войти</a>';
        return;
    }
}

?>