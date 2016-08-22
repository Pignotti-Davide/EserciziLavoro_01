
var app = angular.module("myApp");

var studyTableCtrl=app.controller('studyTableCtrl', function($scope){
	
			this.category=[
			               ['CSS',[{name:"arg1",read: true, applied: false, readAgain: false}]], 
			               ['Bootstrap', []],
			               ['Angular.js', []]
			               ];
			$scope.newTopic={};

			this.activeTopic=this.category[0];
			this.setActive=function(num){
				this.activeTopic=this.category[num];
			};
			
			this.isSet=function(num){
				this.activeTopic===this.category[num];
			};

			this.setChecked=function(id,bool){
				if(bool){
					$(id).attr('checked');
				}
			};
			
			this.addTopic=function(){
				this.category[$scope.cathegory][1].push(angular.copy($scope.newTopic));
				$scope.newTopic={};
				console.log("insideAddtopic");
			};

			this.saveChanges=function(){
	};
});
