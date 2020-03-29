$(document).ready(function () {
    goods();
});

function goods() {
    var imgDir = "/img/";
    init();

    function init() {
        $.getJSON("/scripts/goods.php", goodsOut);
        initMiniCart();
        $("#mini-cart").hide();
    }

    function goodsOut(data) {
        var out = "";

        for (var good in data) { // выводим товары
            out += `
        <div class="col-sm-6 col-lg-4 col-xl-3 text-center">
            <div class="goods-container">
                <div class="goods-container__img " style="background-image: url(${imgDir+data[good].img})"></div>
                <div class="goods-container__text">
                    <p class="name">${data[good].name}</p>
                    <div class="buy d-flex align-content-center justify-content=center">
                        <div class="cost">Цена ${data[good].cost} руб.</div>
                        <button class="add-to-cart btn btn-outline-primary btn-lg" good-id="${good}">Купить</button>
                    </div>
                </div>
            </div>
        </div>`;
        }

        $('.goods-out').html(out);
        //кнопки взаимодействия с товарами
        $('.add-to-cart').popover({
            trigger: 'manual',
            container: 'body',
            placement: "top",
            html: true,
            content: "Товар добавлен в <a href='/pages/cart.php'>корзину</a>"
        });
        $('.add-to-cart').on('click', addToCart);
        $('.add-to-cart').on('shown.bs.popover', function () {
            var that = this;
            setTimeout(function () {
                $(that).popover('hide');
            }, 3000);
        });
        console.log(data);
    }

    function addToCart() {
        var id = $(this).attr('good-id');
        $(this).popover("show");
        var cart = getCookie('cart');

        if (cart) {
            cart = JSON.parse(cart);
        }
        if (!cart) {
            cart = {};
        }
        if (!cart[id]) {
            cart[id] = {
                amount: 1
            };
        } else {
            cart[id].amount++;
        }

        setCookie('cart', JSON.stringify(cart));
        updateMiniCart();
    }

    function initMiniCart() {
        var cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : {};

        if (!isEmpty(cart)) {
            var a = document.createElement("a");
            a.className = "mini-cart shadow";
            a.id = "mini-cart";
            a.href = "/pages/cart.php";
            var span = document.createElement("span");
            span.className = "fa fa-shopping-cart";

            var length = 0;
            for (var good in cart) {
                length += cart[good].amount;
            }

            document.body.appendChild(a);
            a.appendChild(span);
            a.innerHTML += " " + length;
        }

        $(document).on("scroll", function () { // корзина скрывается на самом верху
            if ($(document).scrollTop() - $(".top-panel").offset().top < $(".top-panel").height()) {
                $("#mini-cart").css("transition", "");
                $("#mini-cart").hide(200);
            } else {
                $("#mini-cart").show(200, function () {
                    $("#mini-cart").css("transition", "0.2s");
                });
            };
        });
    }

    function updateMiniCart() {
        var miniCart = document.getElementById("mini-cart");
        if (!miniCart) {
            initMiniCart();
            return;
        } else {
            var cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : {};
            var span = document.createElement("span");
            span.className = "fa fa-shopping-cart";

            var length = 0;
            for (var good in cart) {
                length += cart[good].amount;
            }
            miniCart.innerHTML = "";
            miniCart.appendChild(span);
            miniCart.innerHTML += " " + length;
        }
    }

    function isEmpty(object) {
        return JSON.stringify(object) == "{}";
    }
};
