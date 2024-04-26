let gamestate = {
	pause: false,
	menu: {
		menuOpen:false,
		menuType: "main",
		menuTab: 0,
		main:{
			escapeEvent:"duno yet",
			enabledkeys:["swipeUp","SwipeDown","onClick"],
			renderelements:[
				"gameobject",
				"gameobjecy",
				"gameobject"
			]
		},
		getRenderElements: function(){
			if(menuOpen){
				return this[menuType].renderelements 
			}else{
				return []
			}
		}
	}

}

export default gamestate 
