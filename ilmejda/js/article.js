$(document).ready(function(){
	$("#articleMainImageDiv").mouseover(function() {
		$("#articleMainImageDiv").css("background-image", "linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)), url('images/articleexampleimage.jpg')");
		$("h1").css("color", "rgba(10,10,10,0.5)");
	});
	
	$("#articleMainImageDiv").mouseout(function() {
		$("#articleMainImageDiv").css("background-image", "linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0),rgba(255,255,255,0),rgba(255,255,255,0)), url('images/articleexampleimage.jpg')");	
		$("h1").css("color", "rgba(40,40,40,1)");
	});
});