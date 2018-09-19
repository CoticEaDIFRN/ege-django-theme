var cont = 0;
$('#btn-menu').click(function () {
    $('.modal-back').toggleClass('d-block');
    if (cont == 0) {
        $('#left_menu').removeClass('d-none');
        $('#left_menu').fadeIn(500);
        cont = 1;
        $('#menu-user').fadeOut(100);
        cont_usr = 0;
    } else {
        $('#left_menu').fadeOut(100);
        cont = 0;
    }
});

$('#modal').click(function () {
    $('.modal-back').toggleClass('d-block');
    $('#left_menu').fadeOut(100);
    cont = 0;
});

var cont_usr = 0;
$('#top-user').click(function () {
    if (cont_usr == 0) {
        $('#menu-user').removeClass('d-none');
        $('#menu-user').fadeIn(500);
        cont_usr = 1;
        $('.modal-back').removeClass('d-block');
        $('#left_menu').fadeOut(1);
        cont = 0;
    } else {
        $('#menu-user').fadeOut(100);
        cont_usr = 0;
    }
});


$('.card_body').click(function () {
    $(this).find('.card_content').toggleClass('d-none');
    $(this).find('hr').toggleClass('d-none');
});

$('.title-menu').click(function () {
    $(this).find('.sub-menu').toggleClass('d-none');
});

$('.btn_more').click(function () {
    event.stopPropagation();
    $(this).parent().find('.more_actions').toggleClass('d-none');
});