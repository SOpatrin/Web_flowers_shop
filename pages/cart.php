<?php
    $root = $_SERVER['DOCUMENT_ROOT'];
    include "$root/modules/head.php";
?>

<body>
    <?php
        include "$root/modules/header.php";
    ?>
    <section>
        <div class="gray-line"></div>
        <div class="container cart">

        </div>
    </section>
    <?php
        include "$root/modules/scripts.php";
    ?>
    <script src="/scripts/cart.js"></script>
</body>
