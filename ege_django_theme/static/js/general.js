window.onload = function(){
    let l = document.location.pathname;
    if (l === '/login/'){
        let username = document.getElementById("id_username");
        let password = document.getElementById("id_password");
        username.onblur = function () {
            if (username.value) { username.className += ' used'; }
        };
        password.onblur = function () {
            if (password.value) { password.className += ' used'; }
        };
    }
};

const EventBus = new Vue();

//EventBus.$on('new-notification', countNotification => {});
//Bus.$on('new-chat', countChat => {});

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
        sub_menu_style: {
            background: "#D8E4F1",
        },
    },

    created() {
        let l = document.location.pathname;
        if (l !== '/' && l !== '/password_change/'){
            let model = document.getElementsByClassName("menuLeftModel");
            for (let i = 0; i < model.length ; i++) {
                if (l === model[i].children[0].pathname) {
                    model[i].parentElement.className += ' d-flex flex-column align-items-end';
                    model[i].style.background = this.sub_menu_style.background;
                    model[i].parentElement.parentNode.getElementsByTagName("i")[0].className += ' d-none';
                    model[i].parentElement.parentNode.getElementsByTagName("i")[1].className += ' d-block';
                }
            }
        }
    },
    methods: {
        submenu_toogle: function (event) {
            let a = event.target.parentElement;
            let li = a.parentElement.parentElement;
            let inicialClassRight = 'material-icons arrow-right';
            let inicialClassDown = 'material-icons arrow-down';
            if (li.children[1].classList.value !== 'd-flex flex-column align-items-end') {
                li.children[1].className = 'd-flex flex-column align-items-end';
                a.children[0].className += ' d-none';
                a.children[1].className += ' d-block';
            }
            else {
                li.children[1].className = '';
                a.children[0].className = inicialClassRight;
                a.children[1].className = inicialClassDown;
            }
        },
        emitChatAlert() {
            topbar.countChat++;
            if (topbar.countChat !== 0) {
                topbar.countChatSeen = true
            }
            EventBus.$emit('new-chat', this.countChat);
        }
    },
});

let e = document.getElementById("select");

let rightmenu = new Vue({
    el: "#rightmenu",
    delimiters: ['${', '}'],
    data: {
        r_menu_seen: false,
        selected: 0,
        select_option_default: "Select Theme",
        rightmenu_style: {
            background: "#162533"
        },
    },
    updated() {
        localStorage.selected = this.selected;
        localStorage.selDefault = this.select_option_default;
        localStorage.color_rightMenu = this.rightmenu_style.background;
    },
    created() {
        if (localStorage.selected) {
            this.selected = localStorage.selected
        }
        if (localStorage.selDefault) {
            this.select_option_default = localStorage.selDefault
        }
        if (localStorage.color_rightMenu) {
            this.rightmenu_style.background = localStorage.color_rightMenu
        }
    },
    methods: {
        change_color: function () {
            let e = document.getElementById("select");
            let bkgColor = e.options[e.selectedIndex].text;
            if (bkgColor === "Purple") {
                this.select_option_default = "Default";
                this.selected = 2;
                topbar.top_menu_style.background = "#ab63a5";
                topbar.top_perfil_style.background = "#610B5E";
                this.rightmenu_style.background = "#3B0B39";
                leftmenu.sub_menu_style.background = "#F8EFFB";
            }
            else if (bkgColor === "Green") {
                this.select_option_default = "Default";
                this.selected = 1;
                topbar.top_menu_style.background = "#41D596";
                topbar.top_perfil_style.background = "#0B615E";
                this.rightmenu_style.background = "#0B3B39";
                leftmenu.sub_menu_style.background = "#CEF6F5";
            }
            else {
                this.select_option_default = "Select color";
                this.selected = 0;
                topbar.top_menu_style.background = "#2470C6";
                topbar.top_perfil_style.background = "#0B0B61";
                this.rightmenu_style.background = "#0B0B3B";
                leftmenu.sub_menu_style.background = "#D8E4F1";
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
        top_perfil_style: {
            background: "#33588E"
        },
        countNotification: 0,
        countChat: 0,
        countNotificationSeen: false,
        countChatSeen: false,
    },
    updated() {
        localStorage.color_top = this.top_menu_style.background;
        localStorage.color_perfil = this.top_perfil_style.background;
    },
    created() {
        if (localStorage.color_top) {
          this.top_menu_style.background = localStorage.color_top;
        }if (localStorage.color_top) {
          this.top_perfil_style.background = localStorage.color_perfil;
        }
    },
    methods: {
        l_menu_toogle: function () {
            leftmenu.l_menu_seen = !leftmenu.l_menu_seen;
            if(document.getElementById("leftmenu").className === "left-menu pt-5 shadow d-md-block"){
                document.getElementById("leftmenu").className = "left-menu pt-5 shadow d-md-block"
            }
            else {
                document.getElementById("leftmenu").className = "left-menu pt-5 shadow d-md-block"
            }
            if (leftmenu.l_menu_seen === true){
                rightmenu.r_menu_seen = !leftmenu.l_menu_seen;
            }
            modal.modal_seen = leftmenu.l_menu_seen;
        },

        r_menu_toogle: function (event) {
            //console.log(event.path[9].children[1]);
            //let menu = event.path[13].all[71];
            rightmenu.r_menu_seen = !rightmenu.r_menu_seen;
            if (rightmenu.r_menu_seen === true){
                document.onclick = function (event) {
                    //console.log(event.target, menu);
                    if (event.target !== menu){
                        //console.log('entrou');
                        //rightmenu.r_menu_seen = false;
                    }
                    else {
                        //console.log('não');
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
        emitNotificationAlert() {
            this.countNotification++;
            if (this.countNotification !== 0) {
                this.countNotificationSeen = true
            }
            EventBus.$emit('new-notification', this.countNotification);
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
    delimiters: ['${', '}'],
    data: {
        filter_seen: false,
    },
    methods: {
        show_filter: function () {
            this.filter_seen = !this.filter_seen;
        }
    },
});

let error = new Vue({
    el: "#error",
    delimiters: ['${', '}'],
    data: {
        error_seen: false,
    },
    methods: {

    },
    mounted() {
        this.error_seen = true;
    },
    updated() {
        swal({
          title: 'Usuário ou senha incorretos',
          text: '',
          icon: 'warning',
        });
    },
});

let result = new Vue({
    el: "#result_cards",
    data: {

    },
    methods: {
        check_all: function (event) {
            let check_content = document.getElementById('card-content').getElementsByTagName('input');
            for (let i = 0; i < check_content.length; i++){
                check_content[i].checked = event.target.checked;
            }
        }
    },
});
