var app = angular.module("myApp");
var formCtrl=app.controller("formCtrl", function($scope, peopleService) {
	
	$scope.people=peopleService.getPeople();
	$scope.createPerson=function(){
		peopleService.savePerson($scope.person);
	}
	
	$scope.removePerson=function(index){
		peopleService.deletePerson(index)
	}
	
	$scope.resetForm = function() {
		$scope.person.name=null;
		$scope.person.surname=null;
		$scope.person.date=null;
		$scope.person.degree=null;
		$scope.person.city=null;
		$scope.person.street=null;
		$scope.person.cap=null;
	};
	
	$scope.showTable=function(){
		if (peopleService.getPeople().length!=0) return true;
		else return false;
	}
	
});