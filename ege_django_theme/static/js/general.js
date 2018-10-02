let vuejs_django = new Vue({
    el: "#branding",
    data: {
        titulo: "Teste com Vue",
        select_option_default: "Select Theme",
        top_menu_style: {
            background: "#5D81C1"
        },
        left_menu_style: {
            background: "#33588E"
        },
    },
    methods: {
        change_color: function () {
            let e = document.getElementById("select");
            let bkgColor = e.options[e.selectedIndex].text;
            console.log(bkgColor);
            if (bkgColor === "Purple") {
                this.select_option_default = "Default";
                this.top_menu_style.background = "#ab63a5";
                this.left_menu_style.background = "#9370DB";
            }
            else if (bkgColor === "Green") {
                this.select_option_default = "Default";
                this.top_menu_style.background = "#328D96";
                this.left_menu_style.background = "#2E8B57";
            }
            else {
                this.select_option_default = "Select color";
                this.top_menu_style.background = "#5D81C1";
                this.left_menu_style.background = "#33588E";
            }
        }
    },
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