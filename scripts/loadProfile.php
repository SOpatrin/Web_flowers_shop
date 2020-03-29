<?php

function loadProfile($id) {
    
    $host = 'localhost';
    $db = 'flowersShop';
    $charset = 'utf8';
    $user = 'root';
    $dbPassword = '';
    
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $dbPassword);
    
    $query = $pdo->prepare("SELECT permission FROM users WHERE id = :id");
    $query->execute(['id' => $id]);
    $permission = $query->fetchColumn();
    
    if ($permission >= 60) {
        $adminPanelRef = "<a class='dropdown-item' href='/pages/goodsManagement.php'>Управление товарами</a>";
    } else {
        $adminPanelRef = "";
    }
    
    echo "<a id='profile-menu-link' class='nav-link'>
            <span class='fa fa-user'></span>
            <div id='profile-menu' class='shadow'>
                <a class='dropdown-item' href=''>Профиль</a>
                $adminPanelRef
                <a class='dropdown-item' href='/pages/cart.php'>Корзина</a>
                <a id='logout' class='dropdown-item' href=''>Выйти</a>
            </a>
          </button>";
}

?>