define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

    var tubo = require("models/MyModel");

  var CreaAnnuncioPageView = Backbone.View.extend({

    constructorName: "CreaAnnuncioView",


    events: {
        "click .free-or-pay" : "selectFreePay",
        "click .button-offerte-richieste" : "selectOfferteRichieste",
        "click .creaAnnuncio-btn-pubblica" : "pubblicaAnnuncio"
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
      this.$form = this.$el.find("#formPubblicaAnncio");
      this.$textarea = this.$el.find("textarea[name=descrizioneAnnuncio]");
      
      return this;
      
    },
    selectFreePay  : function(e){
        $(".free-or-pay").removeClass("attivo");
        var $target = $(e.target);
            while(!$target.hasClass("free-or-pay")) {
                $target=$target.parent();
            }
            $target.addClass("attivo");
            console.log($target);
            this.$soldi=$target.attr("value");
            console.log($soldi);
    },
    selectOfferteRichieste : function(e){
        $(".button-offerte-richieste").removeClass("attivo");
        
        var $target = $(e.target);
            while(!$target.hasClass("button-offerte-richieste")) {
                $target=$target.parent();
            }
            $target.addClass("attivo");
            console.log($target);
            this.$sezione = $target.attr("value");
            console.log(this.$sezione);
    },
    pubblicaAnnuncio : function (){
        console.log(this.$sezione,"ssss");
        console.log(this.$form);
        var form = Utils.serializeForm(this.$form);
        form.sezione=this.$sezione;
        form.soldi=this.$soldi;
        form.descrizione = this.$textarea.val();
        console.log(form);
        console.log(this.model);
        this.model.set(form,"{form}");
        console.log(this.model);
    }

    // rendered: function(e) {
    // },

    // generic go-back function
    
  });

  return CreaAnnuncioPageView;
  });


