var app = angular.module("myApp");
var formCtrl=app.controller("formCtrl", function($scope) {
	$scope.people=[];
	$scope.createPerson= function(params){
		var person=new Object();
		person.name=params.name;
		person.surname=params.surname;
		person.age=10;
		if(params.degree){
			person.laurea="Si";
		}
		else person.degree="No";
		$scope.people.push(person);
	};
	$scope.removePerson=function(j){
		$scope.people.splice(j,1);
	};
	$scope.resetForm = function() {
	    $scope.params.name=null;
	    $scope.params.surname=null;
	    $scope.params.date=null;
	    $scope.params.degree=null;
	    $scope.params.city="";
	    $scope.params.street=null;
	    $scope.params.cap=null;
	    };
	$scope.showTable=function(){
		if ($scope.people.length!=0) return true;
		else return false;
	}
});
formCtrl.directive("onlyDigits", function () {

	return {
		restrict: "A",
		require: "?ngModel",
		link: function (scope, element, attrs, modelCtrl) {
			modelCtrl.$parsers.push(function (inputValue) {
				if (inputValue == undefined) return "";
				var transformedInput = inputValue.replace(/[^0-9]/g, "");
				if (transformedInput !== inputValue) {
					modelCtrl.$setViewValue(transformedInput);
					modelCtrl.$render();
				}
				return transformedInput;
			});
		}
	};
});