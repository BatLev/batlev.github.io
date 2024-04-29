let gamestate = {
	pause: false,
	menu: {
		menuOpen:true,
		menuType: "main",
		menuTab: 0,
		main:{
			escapeEvent:"duno yet",
			enabledkeys:["swipeUp","SwipeDown","onClick"],
			renderelements:[
				{
					position:[600,200],
					update:function(){
					//	this.position[0]++;
					},
					render:function(canvascontex){
						let canvas = canvascontex;
						canvas.fillStyle = 'white';
						canvas.fillRect(this.position[0],this.position[1],20,10);
						canvas.fillRect(this.position[0],this.position[1],10,100);
						canvas.fillRect(this.position[0],this.position[1]+90,20,10);

						canvas.fillRect(this.position[0]+380,this.position[1],20,10);
						canvas.fillRect(this.position[0]+400,this.position[1],10,100);
						canvas.fillRect(this.position[0]+380,this.position[1]+90,20,10);

						canvas.font = "50px serif"
						canvas.fillText('Hello World!',this.position[0]+30,this.position[1]+70,360)

						console.log(this.position[0])
					}
				}
			]
		}
	},
	getRenderElements: function(){
		if(this.menu.menuOpen){
			return this.menu[this.menu.menuType].renderelements 
		}else{
			return ["error in getrenderelement"]	
		}
		return ['error gamestate']
	}
}

export default gamestate 
