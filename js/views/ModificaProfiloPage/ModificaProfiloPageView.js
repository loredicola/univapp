define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var ModificaProfiloPageView = Backbone.View.extend({

    constructorName: "ModificaProfiloPageView",

    //id: "main",

    events: {
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.modificaProfilo;
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

    // rendered: function(e) {
    // },

    // generic go-back function
    goBack: function() {
      //window.history.back();
    },
    
    /*addExam: function(){
        
        btn.bind("click",function(){
            newExam= document.body.getElementById("#Esami1");
            document.body.appendTo("#Esami1");
        }
                );
    },*/


//    setActiveTabBarElement: function(elementId) {
//      // here we assume that at any time at least one tab bar element is active
//      document.getElementsByClassName("active")[0].classList.remove("active");
//      document.getElementById(elementId).classList.add("active");
//    },
  });

  return ModificaProfiloPageView;

});


