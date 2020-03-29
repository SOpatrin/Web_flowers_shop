<?php

$root = $_SERVER['DOCUMENT_ROOT'];
$imgDir = "$root/img/";

$id = $_POST['id'];

$host = 'localhost';
$db = 'flowersShop';
$charset = 'utf8';
$user = 'root';
$dbPassword = '';

$pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $dbPassword);

// удаляем файл
$query = $pdo->prepare("SELECT img FROM goods WHERE id = ?");
$query->execute([$id]);
$imageName = $query->fetchColumn();

unlink($imgDir . $imageName);

// удаляем товар из базы данных
$query = $pdo->prepare("DELETE FROM goods WHERE id = ?");
$query->execute([$id]);

?>