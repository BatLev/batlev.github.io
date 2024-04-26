let renderer = {

	render:function(elements,canvascontex){
		elements.forEach((element)=>{
			//console.log(element);
			element.update();
			element.render(canvascontex);
		})
	}
};

export default renderer;
