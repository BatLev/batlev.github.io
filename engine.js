import _TimeManager from "./timemanager.js"
import _gamestate from "./gamestate.js"
import _eventhandler from "./eventhandler.js"

let canvas;
let context;

let rectposition = {
	x:100,
	y:100
}

window.onload = init

let timemanager = _TimeManager;
let gamestate = _gamestate;
let eventhandler = _eventhandler;

function init(){
        canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
	timemanager.updateTime()
	eventhandler.init();
	document.addEventListener('swipeUp',()=>rectposition.y+=-50)
	document.addEventListener('swipeDown',()=>rectposition.y+=50)
	document.addEventListener('swipeLeft',()=>rectposition.x+=-50)
	document.addEventListener('swipeRight',()=>rectposition.x+=50)
        // Start the first frame request
        window.requestAnimationFrame(gameLoop);
    }

function gameLoop() {
	if(gamestate.pause){return}
    	draw();
    	window.requestAnimationFrame(gameLoop);
	}

function draw(){
	context.fillStyle = '#000000'
	context.fillRect(0,0,500,400)
        context.fillStyle = '#ffffff';
        context.fillRect(rectposition.x, rectposition.y, 200, 200);
	}
