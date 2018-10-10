let leftmenu = new Vue({
    el: "#leftmenu",
    data: {
        l_menu_seen: (window.innerWidth >= 768),
        sub_menu_seen: false,
        arrow_down_seen: false,
        arrow_right_seen: true,
        left_menu_style: {
            background: "#33588E"
        },
    },
    methods: {
        submenu_toogle: function ($event) {
            /*let submenu = $event.path[2].children[1];
            let arrow_right = $event.target.children[0];
            let arrow_down = $event.target.children[1];
            let sub = document.getElementsByClassName('sub-menu');
            console.log(sub, submenu, arrow_right, arrow_down);*/
            console.log(this);
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
                leftmenu.left_menu_style.background = "#9370DB";
            }
            else if (bkgColor === "Green") {
                this.select_option_default = "Default";
                topbar.top_menu_style.background = "#328D96";
                leftmenu.left_menu_style.background = "#2E8B57";
            }
            else {
                this.select_option_default = "Select color";
                topbar.top_menu_style.background = "#5D81C1";
                leftmenu.left_menu_style.background = "#33588E";
            }
        },
    },
});

let topbar = new Vue({
    el: "#topbar",
    data: {
        top_menu_style: {
            background: "#5D81C1"
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
        modal_seen: false,
    },
    methods: {

    },
});