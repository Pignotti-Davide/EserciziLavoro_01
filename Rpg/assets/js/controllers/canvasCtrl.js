var app = angular.module("myApp");
var canvasCtrl=app.controller("canvasCtrl", function($scope){
	

	var canvas = document.querySelector('canvas');
	fitToContainer(canvas);

	
	function fitToContainer(canvas){
		canvas.style.width='100%';
		canvas.style.height='100%';
		canvas.width  = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	};


	$scope.init=function() {
		var stage = new createjs.Stage("demoCanvas");
		createjs.Ticker.addEventListener("tick", handleTick);
		createjs.Ticker.setFPS(30);
		
		stage.update();

		function handleTick(event) {
				stage.update();
			}
		};
	
});


