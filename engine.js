import _TimeManager from "./timemanager.js"

let canvas;
let context;

window.onload = init

let timemanager = _TimeManager;

function init(){
        canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
	timemanager.updateTime()
        // Start the first frame request
        window.requestAnimationFrame(gameLoop);
    }

function gameLoop() {
    	draw();
    	window.requestAnimationFrame(gameLoop);
	}

function draw(){
        let randomColor =  '#ff8080';
        context.fillStyle = randomColor;
        context.fillRect(100, 50, 200, 175);
	}
