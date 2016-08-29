var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "assets/partials/map.html",
		controller: "mapCtrl"
	})

});





