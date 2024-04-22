 let TimeManager = {
	lastTime : 0,
	elapsedTime : 0,
	updateTime : function (){
		let currenttime = performance.now() / 1000
		this.elapsedTime = currenttime-this.lastTime 
		this.lastTime = currenttime 
	},
	getTime : function (){
		return this.elapsedTime
	},
	getFps : function (){
		return Math.round(1 / this.elapsedTime)
	}
}

//    context.fillStyle = 'white';
//    context.fillRect(0, 0, 200, 100);
//    context.font = '25px Arial';
//    context.fillStyle = 'black';
//    context.fillText("FPS: " + fps, 10, 30);


export default TimeManager;
