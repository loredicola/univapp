define(function (require) {

    var $ = require("jquery");
    var Backbone = require("backbone");
    var MyModel = require("models/MyModel");
    var StructureView = require("views/StructureView");
    var HomePageView = require("views/HomePage/HomePageView");
    var ProfiloPageView = require("views/ProfiloPage/ProfiloPageView");
    var ModificaProfiloPageView = require("views/ModificaProfiloPage/ModificaProfiloPageView");
    var CreaAnnuncioPageView = require("views/CreaAnnuncioPage/CreaAnnucioPageView");
    var paginaannuncioPageView = require("views/paginaannuncio/paginaannuncioPageView");

    var AppRouter = Backbone.Router.extend({
        constructorName: "AppRouter",
        routes: {
            // the default is the structure view
            "": "home",
            "home": "home",
            "profilo": "showProfilo",
            "modificaProfilo": "showModificaProfilo",
            "creaAnnuncio": "showCreaAnnuncio",
            "paginaannuncio": "showPaginaannuncio"
        },
        initialize: function (options) {
            this.currentView = undefined;
            

            this.showStructure();
        },
        home: function () {
            this.show_hide_nav_e_btn(false);
            var page = new HomePageView();
            this.changePage(page);

        },
        showProfilo: function () {
            this.show_hide_nav_e_btn(true);
            var page = new ProfiloPageView();
            this.changePage(page);
        },
        showModificaProfilo: function () {
            this.show_hide_nav_e_btn(true);
            var page = new ModificaProfiloPageView();
            this.changePage(page);
        },
        showCreaAnnuncio : function(){
            this.show_hide_nav_e_btn(true);
            var page = new CreaAnnuncioPageView();
            this.changePage(page);
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
        
        
        showPaginaannuncio: function(){
            var page = new paginaannuncioPageView();
            this.changePage(page);
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