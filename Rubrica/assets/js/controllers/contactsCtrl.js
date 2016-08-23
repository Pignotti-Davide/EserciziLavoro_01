var app = angular.module("myApp");
var contactsCtrl=app.controller("contactsCtrl", function($scope, contactsService){
	
	$scope.contacts=contactsService.getContacts();
	
	
	
	
});