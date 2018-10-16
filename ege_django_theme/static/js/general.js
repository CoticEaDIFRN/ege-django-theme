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
    },
    methods: {
        submenu_toogle: function () {
            console.log(event.path[2].children[1]);
            this.sub_menu_seen = !this.sub_menu_seen;
            this.arrow_down_seen = !this.arrow_down_seen;
            this.arrow_right_seen = !this.arrow_right_seen;
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
            contentmain.modal_seen = leftmenu.l_menu_seen;
        },

        r_menu_toogle: function () {
            rightmenu.r_menu_seen = !rightmenu.r_menu_seen;
            if (rightmenu.r_menu_seen === true && window.innerWidth < 768){
                leftmenu.l_menu_seen = !rightmenu.r_menu_seen;
            }
            if (window.innerWidth >= 768) {
                contentmain.modal_seen = false
            }
            else { contentmain.modal_seen = leftmenu.l_menu_seen }
        },
    },
});

let contentmain = new Vue({
    el: "#content-main",
    data: {
        content_style: {
            background: "#F7F7F7",
        },
        modal_seen: false,
        filter_seen: '',
        btn_filter_clicked: false,
    },
    methods: {
        show_filter: function () {
            console.log(this.filter_seen);
            this.filter_seen = !this.filter_seen;
        }
    },
});

let filter = new Vue({
    el: "#filter",
    data: {

    },
});

contentmain.filter_seen = false;