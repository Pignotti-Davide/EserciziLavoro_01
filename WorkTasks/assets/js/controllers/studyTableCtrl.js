var app = angular.module("myApp");
var studyTableCtrl=app.controller('studyTableCtrl', function($scope){

	$scope.cathegory=[
	                 ['CSS',[{name:"arg1",read: true, applied: false, readAgain: false}]], 
	                 ['Bootstrap', []],
	                 ['Angular.js', []]
	                 ];

	$scope.newTopic={};

	$scope.activeTopic=$scope.cathegory[0];

	$scope.setActive=function(num){
		$scope.activeTopic=$scope.cathegory[num];
	};

	$scope.isSet=function(num){
		$scope.activeTopic===$scope.cathegory[num];
	};

	$scope.setChecked=function(id,bool){
		if(bool){
			$(id).attr('checked');
		}
	};

	$scope.addTopic=function(){
		$scope.cathegory[$scope.selectedCathegory][1].push(angular.copy($scope.newTopic));
		$scope.newTopic={};
	};
	
	$scope.showExample=function(partialName){
		
		
	}

});
