(function() {
	var app = angular.module("myApp");
	
	app.directive('studyTable', function(){
		return {
			restrict: 'E',
			templateUrl: 'assets/partials/study-table.html',
			controller: function($scope){
				$scope.css=['CSS',[]];

				$scope.bootstrap=['Bootstrap',[]];

				$scope.angular=['Angular.js',[]];
				
				this.active='Css';
				this.setActive=function(tabName){
					this.active=tabName;					
				};
				this.isSet=function(tabName){
					this.active=tabName;
				};
			},
			controllerAs: 'studyTable'
		};
	});
});