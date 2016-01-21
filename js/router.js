define(function (require) {

    var $ = require("jquery");
    var Backbone = require("backbone");
    var MyModel = require("models/MyModel");
    var StructureView = require("views/StructureView");
    var MyView = require("views/pages/MyView");
    var MapView = require("views/pages/MapView");
    var HomePageView = require("views/HomePage/HomePageView");

    var AppRouter = Backbone.Router.extend({
        constructorName: "AppRouter",
        routes: {
            // the default is the structure view
            "": "home",
            "myview": "myView",
            "map": "map",
            "home": "home"
        },
        initialize: function (options) {
            this.currentView = undefined;

            this.showStructure();
        },
        myView: function () {
            // highlight the nav1 tab bar element as the current one
            //this.structureView.setActiveTabBarElement("nav1");
            // create a model with an arbitrary attribute for testing the template engine
            var model = new MyModel({
                key: "testValue"
            });
            // create the view
            var page = new MyView({
                model: model
            });
            // show the view
            this.changePage(page);
        },
        map: function () {
            // highlight the nav2 tab bar element as the current one
            //this.structureView.setActiveTabBarElement("nav2");
            // create the view and show it
            var page = new MapView();
            this.changePage(page);
        },
        home: function () {
            // create the view and show it
            //this.structureView.setActiveTabBarElement("nav3");
            var page = new HomePageView();
            this.changePage(page);

        },
        // load the structure view
        showStructure: function () {
            if (!this.structureView) {
                this.structureView = new StructureView();
                // put the el element of the structure view into the DOM
                document.body.appendChild(this.structureView.render().el);
                this.structureView.trigger("inTheDOM");
            }
        }
    });

    return AppRouter;

});