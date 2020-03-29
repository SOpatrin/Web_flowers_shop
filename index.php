<?php
    $root = $_SERVER['DOCUMENT_ROOT'];
    include "$root/modules/head.php";
?>

<body>
    <?php
        include "$root/modules/header.php";
    ?>
    <section>
        <div class="container-fluid main-slider">
            <img src="/img/main-slider-background.jpg" alt="">
        </div>
    </section>
    <section class="goods-section">
        <div class="container-fluid goods">
            <div class="row goods-out">

            </div>
        </div>
    </section>
    <section></section>
    <section></section>
    <footer></footer>

    <?php
        include "$root/modules/scripts.php";
    ?>
    <script src="/scripts/goods.js"></script>
</body>

</html>

