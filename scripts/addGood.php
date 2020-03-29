<?php

$root = $_SERVER['DOCUMENT_ROOT'];
$imgDir = "$root/img/";

$name = $_POST['name'];
$cost = $_POST['cost'];
$description = $_POST['description'];
$image = $_FILES['image'];

// проверяем, что поля заполнены
if (!isset($name) || !isset($cost) || !isset($image)) {
    return;
}
//} else {
if (!is_uploaded_file($image['tmp_name'])) {
    return;
}

move_uploaded_file($image['tmp_name'], $imgDir . $image['name']);

$host = 'localhost';
$db = 'flowersShop';
$charset = 'utf8';
$user = 'root';
$dbPassword = '';

$pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $dbPassword);

// добавляем аккаунт в базу данных
$query = $pdo->prepare("INSERT INTO goods(name, cost, description, img) VALUES(?, ?, ?, ?)");
$query->execute([$name, $cost, $description, basename($image['name'])]);

//}

?>