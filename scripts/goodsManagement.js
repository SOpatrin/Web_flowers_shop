$(document).ready(function () {
    goodsManagement();
});

function goodsManagement() {
    var imgDir = "/img/";
    var cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : {}; // подгружаем корзину

    init();
    
    function init() {
        $.getJSON("/scripts/goods.php", goodsOut);
    }

    function goodsOut(data) {
        var out = `
            <div class="add-good">
                <span>Добавление товара:</span>
                <form class="form" id="reg" enctype="multipart/form-data" method="post" action="/pages/goodsManagement.php">
                    <input type="hidden" name="MAX_FILE_SIZE" value="2097152‬">
                    <div class="form-group">
                        <label for="registration-name">Название</label>
                        <input class="form-control" type="text" name="name" id="add-good-name">
                    </div>
                    <div class="form-group">
                        <label for="registration-email">Цена</label>
                        <input class="form-control" type="text" name="cost" id="add-good-cost">
                    </div>
                    <div class="form-group">
                        <label for="registration-password">Описание</label>
                        <input class="form-control" type="text" name="description" id="add-good-description">
                    </div>
                    <div class="form-group">
                        <label for="registration-password-apply">Картинка</label><br>
                        <input class="" type="file" name="image" id="add-good-image" accept="image/*">
                    </div>
                    <button class="btn btn-outline-secondary cart-delete" type="submit">+ Добавить товар</button>
                </form>
            </div>`;

        for (var good in data) { // выводим товары
            out += `
            <div class="row cart__good" good-id="${good}">
                <div class="col-6 order-1 col-md-4 order-md-0 col-lg-2">
                    <img src="${imgDir + data[good].img}" alt="${data[good].name}" class="img-thumbnail">
                </div>
                <div class="col-12 order-0 text-center col-md-4 order-md-1 text-md-left col-lg-8 name">
                    <span class="name">${data[good].name}</span>
                    <span class="price">${data[good].cost} руб.</span>
                </div>
                <div class="cart__good__options col-6 order-2 col-md-4 order-md-2 col-lg-2 ml-auto text-center d-flex flex-column justify-content-around align-items-end">
                    <button class="btn btn-outline-danger good-delete" type="button" good-id="${good}">Удалить</button>
                </div>
            </div>`;
        }
        
        $('.goodsManagement').html(out);
        
        //кнопки взаимодействия с товарами
        $(".good-delete").on("click", deleteGood)
    }
}

function deleteGood() {
    var options = {
        url: "/scripts/deleteGood.php",
        type: "post",
        data: {
            id: $(this).attr("good-id")
        }
    };
    $.ajax(options);
    $(`div[class*="cart__good"][good-id="${$(this).attr("good-id")}"]`).remove();
}