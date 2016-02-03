define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var LoginPageView = Backbone.View.extend({

    constructorName: "LoginPageView",

        //id: "main",
    events: {
        "click #btn-signup" : "goToSignup",
        "click #loginButton" : "login"
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.login;
      //this.on("inTheDOM", this.rendered);
      // bind the back event to the goBack function
      //document.getElementById("back").addEventListener("back", this.goBack(), false);
    },

    render: function() {
      // load the template
      this.el.innerHTML = this.template({});
      // cache a reference to the content element
      this.contentElement = this.$el.find('#content')[0];
      this.$form = this.$el.find("#loginForm")
      return this;
    },
    goToSignup : function(){
       location.hash = "signup";
    },
    
    // rendered: function(e) {
    // },

    // generic go-back function
    goBack: function() {
      //window.history.back();
    },
    login : function(){
        console.log(Utils.serializeForm(this.$form));
        
    },
//    funzione da spostare in utils puo servire anche in
//    serializeForm : function(){
//        var t = this.$form.serializeArray();
//        var obj = {};
//        for(i in t)obj[t[i].name] =t[i].value;
//        console.log(obj);
//    }
    
  });

  return LoginPageView;
  });
