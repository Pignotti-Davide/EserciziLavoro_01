var app = angular.module("myApp");
var mapCtrl=app.controller("mapCtrl", function($scope){
	
	var maxHp=100;
	var maxMp=40;
	$scope.player={name:"Jake",hp:100,atk:50,def:60,mp:40};
	
	var percentage=function(val,max){
		return (val*100/max);
	};
	
	$("#hp-bar").css('width', percentage($scope.player.hp,maxHp)+'%').attr('aria-valuenow', percentage($scope.player.hp,maxHp));
	$("#mp-bar").css('width', percentage($scope.player.mp,maxMp)+'%').attr('aria-valuenow', percentage($scope.player.mp,maxMp));
	


	
});


