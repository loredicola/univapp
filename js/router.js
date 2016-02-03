define(function (require) {

    var $ = require("jquery");
    var Backbone = require("backbone");
    var MyModel = require("models/MyModel");
    var StructureView = require("views/StructureView");
    var HomePageView = require("views/HomePage/HomePageView");
    var ProfiloPageView = require("views/ProfiloPage/ProfiloPageView");
    var ModificaProfiloPageView = require("views/ModificaProfiloPage/ModificaProfiloPageView");
    var CreaAnnuncioPageView = require("views/CreaAnnuncioPage/CreaAnnucioPageView");
    var LoginPageView = require("views/LoginPage/LoginPageView");
    var SignupPageView = require("views/SignupPage/SignupPageView");
    
    var MyCollection = require("collections/MyCollection");
    var MyModel = require("models/MyModel");
    //pipe per le nuove attivita
    
    var AppRouter = Backbone.Router.extend({
        constructorName: "AppRouter",
        routes: {
            // the default is the structure view
            "": "showLogin",
            "home": "home",
            "profilo": "showProfilo",
            "modificaProfilo": "showModificaProfilo",
            "creaAnnuncio": "showCreaAnnuncio",
            "login": "showLogin",
            "signup": "showSignup",
        },
        initialize: function (options) {
            
            this.myCollection = new MyCollection(storage);
            this.myModel  = new MyModel();
            this.currentView = undefined;
            

            this.showStructure();
            this.$icoFilter = $("#menu-filter");
        },
        home: function () {
            console.log(this.ttubo);
            this.showHideFilterIco(true);
            this.show_hide_nav_e_btn(false);
            var page = new HomePageView({
                collection : this.myCollection
            });
            this.changePage(page);

        },
        showProfilo: function () {
            this.showHideFilterIco(false);
            this.show_hide_nav_e_btn(true);
            var page = new ProfiloPageView();
            this.changePage(page);
        },
        showModificaProfilo: function () {
            this.showHideFilterIco(false);
            this.show_hide_nav_e_btn(true);
            var page = new ModificaProfiloPageView();
            this.changePage(page);
        },
        showCreaAnnuncio : function(){
            this.showHideFilterIco(false);
            this.show_hide_nav_e_btn(true);
            var page = new CreaAnnuncioPageView({model : this.model});
            this.changePage(page);
        },
        showLogin : function(){
            this.showHideFilterIco(false);
            this.show_hide_nav_e_btn(true);
            var page = new LoginPageView();
            this.changePage(page);
        },
        showSignup : function(){
            this.showHideFilterIco(false);
            this.show_hide_nav_e_btn(true);
            var page = new SignupPageView();
            this.changePage(page);
        },
        showFiltri : function(){
            this.showHideFilterIco(false);
            this.show_hide_nav_e_btn(true);
            var page = new FiltriPageView();
            this.changePage(page);
        },
        showHideFilterIco : function(bControl){
            if(bControl){
                if(!this.$icoFilter.hasClass("visible"))this.$icoFilter.addClass("visible")
            } else {
                if(this.$icoFilter.hasClass("visible"))this.$icoFilter.removeClass("visible")
                
            }
            
        },
        
        /**
         * se bControll è true nasconde menu e botton + altrimeni li mostra
         * 
         * @param {boolean} bControll
         * @returns {undefined}
         */
        show_hide_nav_e_btn : function(bControll){
            bControll = bControll || false;
            if(bControll){
                if(!this.$content.hasClass("nascosta")){this.$content.addClass("nascosta");}
                if(!this.$headbtn.hasClass("nascosta")){this.$headbtn.addClass("nascosta");}
                if(!this.$buttonCreaAnnuncio.hasClass("nascosta")){this.$buttonCreaAnnuncio.addClass("nascosta");}
            } else {
                if(this.$content.hasClass("nascosta")){this.$content.removeClass("nascosta");}
                if(this.$headbtn.hasClass("nascosta")){this.$headbtn.removeClass("nascosta");}
                if(this.$buttonCreaAnnuncio.hasClass("nascosta")){this.$buttonCreaAnnuncio.removeClass("nascosta");}
            }
            
        },
        // load the structure view
        showStructure: function () {
            if (!this.structureView) {
                this.structureView = new StructureView();
                // put the el element of the structure view into the DOM
                document.body.appendChild(this.structureView.render().el);
                this.structureView.trigger("inTheDOM");
                this.$headbtn = $(".univapp-header-btn");
            this.$content = $("#content");
            this.$buttonCreaAnnuncio = $("#buttonCreaAnnuncio");
            }
        }
    });

    return AppRouter;

});
var storage = [
    {
    "title" : "Aiuto basi di dati",
    "autore" : "Piergigio",
    "descrizione" : "Sono bloccato con l'esame basi di dati. Cerco disperatamente aiuto",
    "date" : "2016/02/15",
    "paid" : "1",
    "offerte" : "1"
    },
    {
    "title" : "Aiuto basi di dati2",
    "autore" : "Piergigio",
    "descrizione" : "Sono bloccato con l'esame basi di dati. Cerco disperatamente aiuto2",
    "date" : "2016/02/15",
    "paid" : "1",
    "offerte" : "0"
    },
    {
    "title" : "Aiuto basi di dati2",
    "autore" : "Piergigio",
    "descrizione" : "Sono bloccato con l'esame basi di dati. Cerco disperatamente aiuto2",
    "date" : "2016/02/15",
    "paid" : "1",
    "offerte" : "0"
    },
    {
    "title" : "Aiuto basi di dati2",
    "autore" : "Piergigio",
    "descrizione" : "Sono bloccato con l'esame basi di dati. Cerco disperatamente aiuto2",
    "date" : "2016/02/15",
    "paid" : "1",
    "offerte" : "0"
    }
];
