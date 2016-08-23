var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	  $routeProvider
	  .when("/", {
	    templateUrl : "assets/partials/contacts.html",
	    controller: "contactsCtrl"
	  })
	 
	});

