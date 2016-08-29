var app = angular.module("myApp");
var indexCtrl=app.controller("indexCtrl", function($scope){
	
});

function adapt(){
	console.log("adapt hit");
	$("#flipbook").css({
		width: 2*$("#container").width(),
		left: "-"+$('#container').width()+"px",
	});
}

$("#flipbook").turn({
	width: 2*$("#container").width(),
	height: 1000,
	autoCenter: false
});
$("#flipbook").css({
	left: "-"+$('#container').width()+"px"
});


