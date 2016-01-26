define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var CreaAnnuncioPageView = Backbone.View.extend({

    constructorName: "CreaAnnuncioView",


    events: {
        "click .free-or-pay" : "selectFreePay"
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.creaAnnuncio;
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
    selectFreePay  : function(e){
        $(".free-or-pay").removeClass("attivo");
        var $target = $(e.target);
            while(!$target.hasClass("free-or-pay")) {
                $target=$target.parent();
            }
            $target.addClass("attivo");
    },

    // rendered: function(e) {
    // },

    // generic go-back function
    
  });

  return CreaAnnuncioPageView;
  });


