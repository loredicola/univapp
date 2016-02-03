define(function(require) {

	var Backbone = require("backbone");

	var MyModel = Backbone.Model.extend({
		constructorName: "MyModel",
            defaults :{
                    "name" : "andrea",
                    "surname" : "lucioli",
                    "date" : "11/02/1993",
                    "ranking" : "star3"
            }
	});

	return MyModel;
});