var app = angular.module("myApp", ["ngRoute"]);


app.config(function($routeProvider) {
	  $routeProvider
	  .when("/", {
	    templateUrl : "assets/partials/home.htm"
	  })
	  .when("/presentation", {
	    templateUrl : "assets/partials/presentation.htm"
	  })
	  .when("/register", {
	    templateUrl : "assets/partials/form.htm"
	  })
	});

