let vuejs_content = new Vue({
    el: "#vuejs_content",
    data: {
        titulo: "Teste com Vue",
    },
});

let vuejs_menu = new Vue({
    el: "#vuejs_menu",
    data: {
        menu_style: {
            background: "#5D81C1"
        },
    },
    methods: {
        change_color: function () {
            let e = document.getElementById("select");
            let bkgColor = e.options[e.selectedIndex].text;
            console.log(bkgColor);
            if (bkgColor === "Purple") {
                this.menu_style.background = "#ab63a5";
            }
            else if (bkgColor === "Green") {
                this.menu_style.background = "#328D96";
            }
            else { this.menu_style.background = "#5D81C1"; }
        }
    }
});

var cont = 0;
$('#btn-menu').click(function () {
    $('.modal-back').toggleClass('d-block');
    if (cont == 0) {
        $('#left_menu').removeClass('d-none');
        $('#left_menu').fadeIn(500);
        cont = 1;
        $('#modal').click(function () {
            $('.modal-back').toggleClass('d-block');
            $('#left_menu').fadeOut(100);
            cont = 0;
        });
        $('#menu-user').fadeOut(100);
        cont_usr = 0;
    } else {
        $('#left_menu').fadeOut(100);
        cont = 0;
    }
});

var cont_usr = 0;
$('#top-user').click(function () {
    if (cont_usr == 0) {
        $('#menu-user').removeClass('d-none');
        $('#menu-user').fadeIn(500);
        cont_usr = 1;
        $('#content-main').click(function () {
            $('#menu-user').fadeOut(100);
            cont_usr = 0;
        })
        $('.modal-back').removeClass('d-block');
        $('#left_menu').fadeOut(1);
        cont = 0;
    } else {
        $('#menu-user').fadeOut(100);
        cont_usr = 0;
    }
});

$('.title-menu').click(function () {
    $(this).find('.sub-menu').toggleClass('d-none');
    $(this).find('.arrow-right').toggleClass('d-none');
    $(this).find('.arrow-down').toggleClass('d-block');
});