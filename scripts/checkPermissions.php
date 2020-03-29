<?php

session_start();
$id = $_SESSION['user_id'];

if (!isset($id)) {
    header('HTTP/1.1 403 incorrect user');
    exit;
}

$host = 'localhost';
$db = 'flowersShop';
$charset = 'utf8';
$user = 'root';
$dbPassword = '';

$pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $dbPassword);

$query = $pdo->prepare("SELECT permission FROM users WHERE id = ?");
$query->execute([$id]);
$permission = $query->fetchColumn();
if (!isset($permission) || $permission < 60) {
    header('HTTP/1.1 403 incorrect user');
    exit;
}


?>