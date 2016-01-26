define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var ProfiloPageView = Backbone.View.extend({

    constructorName: "ProfiloPageView",

        //id: "main",
    events: {
        "click #modificaProfilo" : "redirectModificaProfilo"
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.profilo;
//      this.headbtn=$(".univapp-header-btn");
//      this.content = $("#content");
//      this.content.css({
//          'top' : '50px'
//      });
//      this.headbtn.css({
//          'display' : 'none'
//      });
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
    
    redirectModificaProfilo : function(){
        debugger;
        router.navigate("modificaProfilo",true);
    },

    // rendered: function(e) {
    // },

    // generic go-back function
    goBack: function() {
      //window.history.back();
    }
    
  });

  return ProfiloPageView;
  });
