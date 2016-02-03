define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var SignupPageView = Backbone.View.extend({

    constructorName: "SignupPageView",

        //id: "main",
    events: {
        "click #btn-registrati" : "signUp"
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.signup;
      //this.on("inTheDOM", this.rendered);
      // bind the back event to the goBack function
      //document.getElementById("back").addEventListener("back", this.goBack(), false);
    },

    render: function() {
      // load the template
      this.el.innerHTML = this.template({});
      // cache a reference to the content element
      this.contentElement = this.$el.find('#content')[0];
      this.$form = this.$el.find("#signUpForm")
      return this;
    },
    gotoHome : function(){
        location.hash = "home";
    },
    signUp : function(){
        console.log(Utils.serializeForm(this.$form));
        this.gotoHome();
    },
    // rendered: function(e) {
    // },

    // generic go-back function
    goBack: function() {
      //window.history.back();
    }
    
  });

  return SignupPageView;
  });
