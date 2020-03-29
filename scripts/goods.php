<?php

$host = 'localhost';
$db = 'flowersShop';
$charset = 'utf8';
$user = 'root';
$dbPassword = '';

$pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $dbPassword);

$query = $pdo->prepare("SELECT * FROM goods");
$query->execute();
$out = array();
while ($row = $query->fetch(PDO::FETCH_ASSOC)){
    $out[$row['id']] = [
        'name' => $row['name'],
        'cost' => $row['cost'],
        'description' => $row['description'],
        'img' => $row['img']
    ];
}
echo json_encode($out);


?>