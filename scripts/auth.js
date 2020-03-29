;
(function () {

    $('#login-link').on('click', function () { // открытие модального окна
        $('#login').modal();
        return false;
    });

    $('#auth').validate({ // валидация формы входа
        submitHandler: function (form, event) { // ajax отправка формы
            event.preventDefault();
            var options = {
                url: $(form).attr("action"),
                type: "post",
                data: $(form).serialize(),
                success: loadProfile
            };

            $.ajax(options);
        },
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Укажите свою почту",
                email: "Неверный формат почты"
            },
            password: {
                required: "Введите пароль"
            }
        }
    });

    function loadProfile(responseText, statusText, xhr) { // обработка ответа
        $("#login").modal('hide');
        $("#profile").html(responseText);
        $.ajax("/scripts/mini-profile.js");
    }
}());
