;
(function () {
    
    $('#registration-link').on('click', function () { // модальное окно формы регистрации
        $('#login').modal('hide');
        $('#registration').modal();
        return false;
    });
    
    $('#reg').validate({ // валидация формы регистрации
        submitHandler: function (form, event) { // ajax отправка формы
            event.preventDefault();
            var options = {
                url: $(form).attr("action"),
                type: "post",
                data: $(form).serialize(),
                success: registration
            };

            $.ajax(options);
        },
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            password: {
                required: true
            },
            passwordApply: {
                required: true,
                equalTo: "#registration-password"
            },
            phoneNumber: {
                required: true,
                minlength: 17
            }
        },
        messages: {
            name: {
                required: "Введите имя"
            },
            email: {
                required: "Укажите свою почту",
                email: "Неверный формат почты"
            },
            password: {
                required: "Введите пароль"
            },
            passwordApply: {
                required: "Подвердите пароль",
                equalTo: "Пароли не совпадают"
            },
            phoneNumber: {
                required: "Введите номер телефона",
                minlength: "Введите номер телефона"
            }
        }
    });

    function registration(responseText, statusText, xhr) { // обработка ajax ответа
        $("#registration-occupied-email-error").remove();
        if (responseText == "not enought data") {
            console.log("no data");
        } else if (responseText == "passwords not equal") {
            console.log("passwords not equal");
        } else if (responseText == "email") {
            $('<label id="registration-occupied-email-error" class="error" for="registration-email">Почта занята</label>').insertAfter($("#registration-email"));
        } else if (responseText == "invalid email") {
            $('<label id="registration-occupied-email-error" class="error" for="registration-email">Неверный формат почты</label>').insertAfter($("#registration-email"));
        } else if (responseText == "success") {
            console.log("success");
        } else {
            console.log(responseText);
        }
    }
}());
