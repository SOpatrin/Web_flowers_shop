$(document).ready(function () {
    cart();
});

function cart() {
    var imgDir = "/img/";
    var cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : {}; // подгружаем корзину

    init();
    
    function init() {
        $.getJSON("/scripts/goods.php", goodsOut);
    }

    function goodsOut(data) { // выводим товары
        var out = "";
        if (!cart || isEmpty(cart)) {
            out += "<div class='cart__empty'>В вашей корзине нет товаров<br><a href='/index.php'>Выбрать покупки</a></div>";
            $(".cart").html(out);
        } else {
            var totalPrice = 0;
            for (var good in cart) {
                out += `
            <div class="row cart__good" good-id="${good}">
                <div class="col-6 order-1 col-md-4 order-md-0 col-lg-2">
                    <img src="${imgDir + data[good].img}" alt="${data[good].name}" class="img-thumbnail">
                </div>
                <div class="col-12 order-0 text-center col-md-4 order-md-1 text-md-left col-lg-8 name">
                    ${data[good].name}
                </div>
                <div class="cart__good__options col-6 order-2 col-md-4 order-md-2 col-lg-2 ml-auto text-center d-flex flex-column justify-content-around align-items-end">
                    <span class="price">${data[good].cost} руб.</span>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary cart-minus" type="button" good-id="${good}">-</button>
                        </div>
                        <input type="text" class="form-control cart-quantity" value="${cart[good].amount}" good-id="${good}">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary cart-plus" type="button" good-id="${good}">+</button>
                        </div>
                    </div>
                    <button class="btn btn-outline-danger cart-delete" type="button" good-id="${good}">Удалить</button>
                </div>
            </div>`;
            }

            out += `
        <div class="row cart__total">
               <div class="col-12 d-flex justify-content-between">
                   <span>Товары</span>
                   <span>500 руб.</span>
               </div>
               <div class="col-12 d-flex justify-content-between">
                   <span>Доставка</span>
                   <span>200 руб.</span>
               </div>
               <div class="col-12 d-flex justify-content-between font-weight-bold">
                   <span>Итого</span>
                   <span class="total-sum"></span>
               </div>
        </div>`;

            $(".cart").html(out);
            updateTotalSum();

            // задаем кнопки взаимодействия с товарами
            $(".cart-minus").on("click", goodSubtract);
            $(".cart-plus").on("click", goodAdd);
            $(".cart-delete").on("click", goodDelete);
            $(".cart-quantity").on("keyup", inputCheck);
            $(".cart-quantity").on("change", goodQuantityChange);
        }
    }
    
    function inputCheck() { 
        var value = $(this).val(); 
        var rep = /\D/; 
        if (rep.test(value)) { 
            value = value.replace(rep, ''); 
            $(this).val(value); 
        } 
    } 
    
    function goodQuantityChange() {
        if (!cart) {
            console.log("no cart");
        } else {
            var id = $(this).attr("good-id");
            var quantity = $(this).val();

            if (!cart[id]) {
                console.log("no this good in cart");
            } else if (quantity < 1 || quantity > 100) {
                $(this).attr("value", cart[id].amount);
                $(this).val(cart[id].amount);
                setCookie("cart", JSON.stringify(cart), {
                    path: "/"
                });
                updateTotalSum();
            } else {
                cart[id].amount = quantity;
                $(this).attr("value", cart[id].amount);
                $(this).val(cart[id].amount);
                setCookie("cart", JSON.stringify(cart), {
                    path: "/"
                });
                updateTotalSum()
            }
        }
    }

    function goodSubtract() {
        if (!cart) {
            console.log("no cart");
        } else {
            var id = $(this).attr("good-id");

            if (!cart[id]) {
                console.log("no this good in cart");
            } else if (cart[id].amount > 1) {
                cart[id].amount--;
                $(`.cart__good[good-id="${id}"] .cart-quantity`).attr("value", cart[id].amount);
                $(`.cart__good[good-id="${id}"] .cart-quantity`).val(cart[id].amount);
                setCookie("cart", JSON.stringify(cart), {
                    path: "/"
                });
                updateTotalSum();
            }
        }
    }

    function goodAdd() {
        if (!cart) {
            console.log("no cart");
        } else {
            var id = $(this).attr("good-id");

            if (!cart[id]) {
                console.log("no this good in cart");
            } else if (cart[id].amount < 100) {
                cart[id].amount++;
                $(`.cart__good[good-id="${id}"] .cart-quantity`).attr("value", cart[id].amount);
                $(`.cart__good[good-id="${id}"] .cart-quantity`).val(cart[id].amount);
                setCookie("cart", JSON.stringify(cart), {
                    path: "/"
                });
                updateTotalSum();
            }
        }
    }

    function goodDelete() {
        if (!cart) {
            console.log("no cart");
        } else {
            var id = $(this).attr("good-id");

            if (!cart[id]) {
                console.log("no this good in cart");
            } else {
                $(`div[class*="cart__good"][good-id="${id}"]`).remove();
                delete cart[id];
                setCookie("cart", JSON.stringify(cart), {
                    path: "/"
                });
                updateTotalSum();
                if (isEmpty(cart)) {
                    goodsOut();
                }
            }
        }
    }

    function updateTotalSum() {
        if (cart) {
            $.getJSON("/scripts/goods.php", function (data) {
                var sum = 0;
                for (good in cart) {
                    sum += data[good].cost * cart[good].amount;
                }
                $(".total-sum").html(sum + " руб.");
            });
        }
    }

    function isEmpty(object) {
        return JSON.stringify(object) == "{}";
    }
};
