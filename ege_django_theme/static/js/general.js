let leftmenu = new Vue({
    el: "#leftmenu",
    delimiters: ['${', '}'],
    data: {
        l_menu_seen: (window.innerWidth >= 768),
        sub_menu_seen: false,
        arrow_down_seen: false,
        arrow_right_seen: true,
        left_menu_style: {
            background: "#FAFAFA",
            color: "#53555E",
        },
    },
    methods: {
        submenu_toogle: function () {
            let inicialClassRight = 'material-icons arrow-right';
            let inicialClassDown = 'material-icons arrow-down';
            if (event.path[3].children[1].classList.value !== 'd-block') {
                event.path[3].children[1].className = 'd-block';
                event.path[1].children[0].className += ' d-none';
                event.path[1].children[1].className += ' d-block';
            }
            else {
                event.path[3].children[1].className = '';
                event.path[1].children[0].className = inicialClassRight;
                event.path[1].children[1].className = inicialClassDown;

            }
        },
    },
});

let rightmenu = new Vue({
    el: "#rightmenu",
    delimiters: ['${', '}'],
    data: {
        r_menu_seen: false,
        selected: 0,
        select_option_default: "Select Theme",
    },
    methods: {
        change_color: function () {
            let e = document.getElementById("select");
            let bkgColor = e.options[e.selectedIndex].text;
            if (bkgColor === "Purple") {
                this.select_option_default = "Default";
                topbar.top_menu_style.background = "#ab63a5";
            }
            else if (bkgColor === "Green") {
                this.select_option_default = "Default";
                topbar.top_menu_style.background = "#41D596";
            }
            else {
                this.select_option_default = "Select color";
                topbar.top_menu_style.background = "#2470C6";
            }
        },
    },
});

let topbar = new Vue({
    el: "#topbar",
    delimiters: ['${', '}'],
    data: {
        top_menu_style: {
            background: "#2470C6"
        },
    },
    methods: {
        l_menu_toogle: function () {
            leftmenu.l_menu_seen = !leftmenu.l_menu_seen;
            if (leftmenu.l_menu_seen === true){
                rightmenu.r_menu_seen = !leftmenu.l_menu_seen;
            }
            modal.modal_seen = leftmenu.l_menu_seen;
        },

        r_menu_toogle: function () {
            console.log(event.path[9].children[1]);
            let menu = event.path[13].all[71];
            rightmenu.r_menu_seen = !rightmenu.r_menu_seen;
            if (rightmenu.r_menu_seen === true){
                document.onclick = function (event) {
                    console.log(event.target, menu);
                    if (event.target !== menu){
                        console.log('entrou');
                        //rightmenu.r_menu_seen = false;
                    }
                    else {
                        console.log('não');
                    }
                }
            }
            if (rightmenu.r_menu_seen === true && window.innerWidth < 768){
                leftmenu.l_menu_seen = !rightmenu.r_menu_seen;
            }
            if (window.innerWidth >= 768) {
                modal.modal_seen = false
            }
            else { modal.modal_seen = leftmenu.l_menu_seen }
        },
    },
});

let modal = new Vue ({
    el: "#modal",
    delimiters: ['${', '}'],
    data: {
        modal_seen: false,
    },

});

let filter = new Vue({
    el: "#changelist-filter",
    data: {
        filter_seen: false,
    },
    methods: {
        show_filter: function () {
            this.filter_seen = !this.filter_seen;
        }
    },
});