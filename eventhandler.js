let canvas = document.getElementById('canvas');
let pointerDown = false;
let pointerStartX = null;
let pointerStartY = null;
let pointerEndX = null;
let pointerEndY = null;
let pointerPositionX= null;
let pointerPositionY= null;
let context = "menu";
let swipeUpEvent = new CustomEvent('swipeUp')
let swipeDownEvent = new CustomEvent('swipeDown')
let swipeLeftEvent = new CustomEvent('swipeLeft')
let swipeRightEvent = new CustomEvent('swipeRight')

function clickHandler(event){

}

function pointerDownHandler(event){
	pointerDown=true;
	pointerStartX=event.clientX;
	pointerStartY=event.clientY;
}

function pointerUpHandler(event){

	if(Math.abs(event.clientX-pointerStartX)>=30){
		if(event.clientX>pointerStartX){
			document.dispatchEvent(swipeRightEvent)
		}
		if(event.clientX<pointerStartX){
			document.dispatchEvent(swipeLeftEvent)
		}
	}		

	if(Math.abs(event.clientY-pointerStartY)>=20){
		if(event.clientY>pointerStartY){
			document.dispatchEvent(swipeDownEvent)
		}
		if(event.clientY<pointerStartY){
			document.dispatchEvent(swipeUpEvent)
		}
	}		

	pointerEndX=event.clientX;
	pointerEndY=event.clientY;


	pointerDown=false;

}

function pointerMoveHandler(event){
	pointerPositionX=event.clientX;
	pointerPositionY=event.clientY;
}

let eventHandler = {
	init : function(){
	canvas.onmousedown= clickHandler;
	canvas.onpointerdown = pointerDownHandler;
	canvas.onpointerup = pointerUpHandler;
	canvas.onpointermove = pointerMoveHandler;
	}
}



export default eventHandler;
