$('#profile-menu-link').on('click', function () {
    if (!$('#profile-menu').hasClass("show")) {
        $('#profile-menu').addClass('show');
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $("#profile-menu");
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0 // и не по его дочерним элементам
                &&
                !$('#profile-menu-link').is(e.target) 
                &&
                $('#profile-menu-link').has(e.target).length === 0) {
                div.removeClass('show');
            }
        });
    } else {
        $('#profile-menu').removeClass('show');
    }
    return false;
});

$('#logout').on('click', function () {
    $.ajax('/scripts/logout.php');
});
