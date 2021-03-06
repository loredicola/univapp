define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");
  

  
  var HomePageView = Backbone.View.extend({

    constructorName: "HomePageView",

    //id: "main",

    events: {
            "click #btn-offerte": "show_offerte",
            "click #btn-richieste": "show_richieste" 
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.homepage;
      //this.on("inTheDOM", this.rendered);
      // bind the back event to the goBack function
      //document.getElementById("back").addEventListener("back", this.goBack(), false);
    },

    render: function() {
      // load the template
      console.log(this.collection);
      console.log(this.model);
      this.el.innerHTML = this.template(this.collection.toJSON());
      // cache a reference to the content element
      this.contentElement = this.$el.find('#content')[0];
      return this;
      
    },
    show_offerte: function(){
        console.log("offerte");
    },
    show_richieste: function(){
        console.log("richieste");
    },

    // rendered: function(e) {
    // },

    // generic go-back function
    
  });

  return HomePageView;
  });
