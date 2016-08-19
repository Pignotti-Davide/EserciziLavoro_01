var canvas = document.querySelector('canvas');
fitToContainer(canvas);


var circles=[];

function fitToContainer(canvas){
	canvas.style.width='100%';
	canvas.style.height='100%';
	canvas.width  = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
};

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

function init() {
	var stage = new createjs.Stage("demoCanvas");
	createjs.Ticker.addEventListener("tick", handleTick);
	createjs.Ticker.setFPS(30);
	
	var circle = buildCircle(canvas,stage);
	stage.addChild(circle);
	circles.push(circle);
	stage.update();

	
	var pixelsPerSecond=40;
	function handleTick(event) {
		for(var index=0; index<circles.length; index++){
				var circle=circles[index];
			if (Math.random()>0.5) 
				circle.x+=event.delta/1000*Math.random()*pixelsPerSecond; else 
					circle.x+=-event.delta/1000*Math.random()*pixelsPerSecond;
			
			//L'istruzione condizionale sottoscritta non funziona...
			if (circle.x>stage.canvas.width) {circle.x=0;}
			
			//togliendo questo commento l'applicazione si blocca
			//if (circle.x<0) {circle.x=stage.canvas.heigth;}
			
			if (Math.random()>0.5) 
				circle.y+=event.delta/1000*Math.random()*pixelsPerSecond; else
					circle.y+=-event.delta/1000*Math.random()*pixelsPerSecond;
			
			//L'istruzione condizionale sottoscritta non funziona...
			if (circle.y>stage.canvas.heigth) {circle.y=0;}

			//togliendo questo commento l'applicazione si blocca
			//if (circle.y<0) {circle.y=stage.canvas.heigth;}
			stage.update();
		}
	};
	
	function buildCircle(canvas){
		var circle=new createjs.Shape();
		circle.graphics.beginFill(getRandomColor()).drawCircle(Math.random()*canvas.width, Math.random()*canvas.height, 10+Math.random()*90);
		circles.push(circle);
		circle.addEventListener("click", function(event) {
			stage.addChild(buildCircle(canvas));
			})
		return circle;
	};

	
};



