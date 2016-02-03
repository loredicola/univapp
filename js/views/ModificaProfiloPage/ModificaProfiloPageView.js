define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var ModificaProfiloPageView = Backbone.View.extend({

    constructorName: "ModificaProfiloPageView",

    //id: "main",

    events: {
        "click #Btn-addEsame": "addEsame",
            "click .RankBtn": "increase_decrease_ranking",
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
    addEsame: function () {
            this.$esame = $('#Esame1').clone();
            this.$newEsame = this.$esame.val('');
            this.$container = $("#ContainerEsami");
            this.$container.append(this.$newEsame);
        },
        increase_decrease_ranking: function (e) {
            this.$star = $('.Star');
            this.$target = $(e.target);
            var i = 0;
            while(!this.$target.hasClass("RankBtn"))this.$target = this.$target.parent();
            for (var j = 1; j <= 5 && i === 0; j++)i = (this.$star.hasClass("star" + j) ? j : 0);
            var oldclass="star"+i;
            if(this.$target.attr("id") ==="RankP" && i<5)++i;
            if(this.$target.attr("id") ==="RankM" && i>1)--i;
            var newclass = "star"+i;
            this.$star.removeClass(oldclass).addClass(newclass)
        }
  });

  return ModificaProfiloPageView;

});


