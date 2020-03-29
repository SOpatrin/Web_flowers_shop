<?php
    $root = $_SERVER['DOCUMENT_ROOT'];
    include "$root/scripts/checkPermissions.php";
    include "$root/scripts/addGood.php";
    include "$root/modules/head.php";
?>

<body>
    <?php
        include "$root/modules/header.php";
    ?>
    <section>
        <div class="gray-line"></div>
        <div class="container goodsManagement">
            
        </div>
    </section>
    <?php
        include "$root/modules/scripts.php";
    ?>
    <script src="/scripts/goodsManagement.js"></script>
</body>
