let leftmenu = new Vue({
    el: "#leftmenu",
    data: {
        l_menu_seen: (window.innerWidth >= 768),
        sub_menu_seen: false,
        arrow_down_seen: false,
        arrow_right_seen: true,
        left_menu_style: {
            background: "#FAFAFA",
            color: "#53555E",
        },
        cont: 0,
    },
    methods: {
        submenu_toogle: function () {
            if (this.cont % 2 === 0) {
                event.path[2].children[1].className = 'd-block';
                this.cont ++
            }
            else {
                event.path[2].children[1].className = '';
                this.cont --;
            }
        },
    },
});

let rightmenu = new Vue({
    el: "#rightmenu",
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
            rightmenu.r_menu_seen = !rightmenu.r_menu_seen;
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