$(document).ready(function(){
	

$(document).on('scroll', function() {
	var scrollPosition = window.scrollY;
	if(scrollPosition > 0)
	{
		
	$("#headerLinks").css("line-height", "50px");
	$("#headerLinks").css("line-height", "50px");
	
	
	//alert(scrollPosition);
	$("#header").css("height", "50px");
	$("#header").css("line-height", "50px");
	
	$("#content").css("margin-top", "50px");
	
	$("#search").css("margin-top", "10px");
	$("#search").css("width", "30px");
	$("#search").css("height", "30px");
	$("#searchInput").css("margin-top", "10px");
	$("#searchInput").css("height", "30px");
	$("#searchInput").css("width", "200px");
	
		
			$('#headerLogo').attr("src","./images/ilMejdaMiniLogo.png");
			$("#headerLogo").css("width", "30px");
			$("#headerLogo").css("height", "30px");
			$("#headerLogo").css("margin-top", "10px");
			$('#headerLogo').fadeIn(500);
	//$("#header").animate({height: "70px"},1000);
	}
	else
	{
		$("#header").css("height", "100px");
		$("#header").css("line-height", "100px");
		
		$("#content").css("margin-top", "100px");
		
		$("#headerLinks").css("line-height", "100px");
		$("#headerLinks").css("line-height", "100px");
		
		$("#search").css("margin-top", "30px");
		$("#search").css("width", "45px");
		$("#search").css("height", "45px");
		$("#searchInput").css("margin-top", "30px");
		$("#searchInput").css("height", "45px");
		$("#searchInput").css("width", "200px");
	
		$('#headerLogo').attr("src","./images/ilMejdaLogo.png");
		$("#headerLogo").css("width", "200px");
		$("#headerLogo").css("height", "70px");
		$("#headerLogo").css("margin-top", "15px");
		$('#headerLogo').fadeIn(500);
			
		//$("#header").animate({height: "100px"},1000);
	}
});
	/*
	var search = false;
	
	$("#search").click(function(){
		
		
		
		if(search == true) //close search
		{
			search = false;
			$("#searchInput").animate({ width:'0' }, 'slow');
			$("#searchInput").hide();
			var headerLinksWidth = document.getElementById("headerLinks").offsetWidth;
			//alert(headerLinksWidth);
			var widthToChange = headerLinksWidth+300-40+45;
			$("#headerLinks").css({width:widthToChange});
			//$("#headerLinks").animate({ width: widthToChange+'px' }, 'slow');
			
		}
		else //open search
		{
			search = true;
			$("#searchInput").animate({ width:'300px' }, 'slow');
			$("#searchInput").show();
			
			var headerLinksWidth = document.getElementById("headerLinks").offsetWidth;
			//alert(headerLinksWidth);
			var widthToChange = headerLinksWidth-300-40-45;
			$("#headerLinks").css({width:widthToChange});
			//$("#headerLinks").animate({ width: widthToChange+'px' }, 'slow');
	
	
		}
		
		//alert("The paragraph was clicked.");
	});
	*/
});