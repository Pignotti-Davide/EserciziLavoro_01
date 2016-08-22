var app = angular.module("myApp", ["ngRoute"]);



app.config(function($routeProvider) {
	  $routeProvider
	  .when("/", {
	    templateUrl : "assets/partials/study-table.html"
	  })
	 
	});

