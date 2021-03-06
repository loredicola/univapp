define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var paginaannuncioView = Backbone.View.extend({

    constructorName: "paginaannuncioView",

    //id: "main",

    events: {
            "click #btn-offerte": "show_offerte",
            "click #btn-richieste": "show_richieste" 
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.paginaannuncio;
      //this.on("inTheDOM", this.rendered);
      // bind the back event to the goBack function
      //document.getElementById("back").addEventListener("back", this.goBack(), false);
    },

    render: function() {
      // load the template
      this.el.innerHTML = this.template({});
      // cache a reference to the content element
      this.contentElement = this.$el.find('#content')[0];
      return this;
      
    },
    show_offerte: function(){
        console.log("offerte");
    },
    show_richieste: function(){
        console.log("richieste");
    }
  });
  return paginaannuncioView;
  });
