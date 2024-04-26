let fullscreenmanager = {
	init:function(){
		if(window.DeviceOrientationEvent){
			window.addEventListener('orientationchange',function(){
				if(window.orientation == 0){
					document.getElementById('fullscreen').requestFullscreen().catch(function(){
						window.alert('fullscreen denied')
					})
				}
			})
		}else{
			window.alert('device orientation event not supportted, please rotate device')
		}
	}
}

export default fullscreenmanager;
