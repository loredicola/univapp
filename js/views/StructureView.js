define(function (require) {

    var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");

    var StructureView = Backbone.View.extend({
        constructorName: "StructureView",
        id: "main",
        events: {
            "click #mymenu": "show_hide_menu",
            "click #backButton": "goBack",
            "click #btn-offerte": "show_offerte",
            "click #btn-richieste": "show_richieste",
            "click #icoHome": "home",
            "click #icoProfilo": "profilo",
            "click #icoImpostazioni": "show_modificaProfilo",
            "click #buttonCreaAnnuncio": "show_creaAnnuncio"
        },
        initialize: function (options) {
            // load the precompiled template
            this.template = Utils.templates.structure;
            this.$icoHome = $("#icoHome");
            //this.on("inTheDOM", this.rendered);
            // bind the back event to the goBack function
            //document.getElementById("back").addEventListener("back", this.goBack(), false);
        },
        render: function () {
            // load the template
            this.el.innerHTML = this.template({});
            // cache a reference to the content element
            this.contentElement = this.$el.find('#content')[0];
            return this;
        },
        // rendered: function(e) {
        // },

        // generic go-back function
        goBack: function () {
            console.log("dietro");
            window.history.back();
        },
//    setActiveTabBarElement: function(elementId) {
//      // here we assume that at any time at least one tab bar element is active
//      document.getElementsByClassName("active")[0].classList.remove("active");
//      document.getElementById(elementId).classList.add("active");
//    },

        home: function (event) {
            this.show_hide_menu(event,true);
            Backbone.history.navigate("home", {
                trigger: true
            });
        },
        profilo: function (event) {
            this.show_hide_menu(event,true);
            Backbone.history.navigate("profilo", {
                trigger: true
            });
        },
        show_modificaProfilo: function(){
            this.show_hide_menu(event,true);
            location.hash = "modificaProfilo";
        },
        
        show_creaAnnuncio : function(){
            this.show_hide_menu(event,true);
            location.hash = "creaAnnuncio";
        },
        
        /**
         * se non passato il parametro bControl chiude il menu se aperto e viceversa
         * altrimenti lo chiude
         * 
         * @param {event} e
         * @param {boolean} bControl
         * @returns {undefined}
         */
        show_hide_menu: function (e, bControl) {
            bControl = bControl || false;
            this.$mymenu = $("#mymenu");
            this.$content = $("#content");
            this.$menu_row = $("#menu_row");
            this.$struct_btn = $("#struct_btn");
            if (bControl) {
                if (this.$mymenu.hasClass("aperto")) {
                    this.$mymenu.removeClass("aperto");
                    this.$content.removeClass("aperto");
                    this.$menu_row.removeClass("aperto");
                    this.$struct_btn.removeClass("aperto");
                }
            } else {
                if (this.$mymenu.hasClass("aperto")) {
                    this.$mymenu.removeClass("aperto");
                    this.$content.removeClass("aperto");
                    this.$menu_row.removeClass("aperto");
                    this.$struct_btn.removeClass("aperto");
                } else {
                    this.$mymenu.addClass("aperto");
                    this.$content.addClass("aperto");
                    this.$menu_row.addClass("aperto");
                    this.$struct_btn.addClass("aperto");
                }
            }

        },
        show_offerte: function () {
            this.$line_selector = $("#line_selector");
            this.$line_selector.removeClass("richieste");
            this.$line_selector.addClass("offerte");
            $("#homepage-container-richieste").removeClass("attivo");
            $("#homepage-container-offerte").addClass("attivo");
            $("#btn-richieste").removeClass("attivo");
            $("#btn-offerte").addClass("attivo");

        },
        show_richieste: function () {
            this.$line_selector = $("#line_selector")
            this.$line_selector.removeClass("offerte");
            this.$line_selector.addClass("richieste");
            $("#homepage-container-offerte").removeClass("attivo");
            $("#homepage-container-richieste").addClass("attivo");
            $("#btn-offerte").removeClass("attivo");
            $("#btn-richieste").addClass("attivo");
        }
    });

    return StructureView;


});